import React, { useEffect, useState } from "react";

import {
  Button,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getListPost } from "./action";

function Home({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListPost());
  }, []);
  const list = useSelector((state) => state);

  const data = list.posts.posts;

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",

          paddingHorizontal: 20,
        }}
      >
        {data == undefined
          ? ""
          : data.map((item) => {
              return (
                <TouchableOpacity
                  style={{
                    marginVertical: 20,
                    backgroundColor: "#EEEEEE",
                    borderRadius: 10,
                  }}
                  // onPress={() => {
                  //   console.log("lay ra ten chuyen", item._id);
                  //   () => navigation.push("Describe");
                  // }}
                  onPress={() =>
                    navigation.navigate("Mô tả", {
                      id: item._id,
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Image
                        source={{ uri: `${item.image}` }}
                        style={{ width: 120, height: 200, borderRadius: 10 }}
                      />
                    </View>

                    <View style={{ marginLeft: 10, flexWrap: "wrap" }}>
                      <Text
                        style={{
                          width: 245,
                          fontSize: 18,
                          paddingRight: 8,
                          paddingTop: 10,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          paddingTop: 13,
                          paddingBottom: 13,
                        }}
                      >
                        Số chap: {item.chaps}
                      </Text>

                      <Text style={{ fontSize: 16 }}>
                        Ngày phát hành :{" "}
                        {moment(item.createdAt).format("DD/MM/YYYY")}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
              // <Text>{item.image}</Text>;
            })}
      </View>
    </ScrollView>
  );
}

export default Home;

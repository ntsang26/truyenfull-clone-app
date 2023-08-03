import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import { TouchableOpacity, View, Text, ScrollView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getListStory } from "../action/action";
import { DESC } from "../constant/view.js";

function Home({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListStory());
  }, []);
  const list = useSelector((state) => state);
  const data = list.posts.posts;
  return (
    <View>
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
                    key={item.sid}
                    style={{
                      marginVertical: 20,
                      backgroundColor: "#EEEEEE",
                      borderRadius: 10,
                    }}
                    onPress={() =>
                      navigation.navigate(DESC, {
                        sid: item.sid,
                      })
                    }
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Image
                          source={{ uri: `${item.image}` }}
                          style={{ width: 150, height: 230, borderRadius: 10 }}
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
              })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

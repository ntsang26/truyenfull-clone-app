import React, { useEffect } from "react";
import { TouchableOpacity, View, Text, ScrollView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getListStory } from "../action/action";
import { DESC } from "../constant/view.js";

function Chap({ route, navigation }) {
  const { sid } = route.params;
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getListStory())
  //   }, [])
  const list = useSelector((state) => state);
  const data = list.chap.posts;
  //   console.log("chap data ===========", data);
  //   const findData = data.filter((item) => item.storyId == sid);
  //   console.log("ket qua khi loc la ======", findData.title);
  return (
    <ScrollView>
      <Text>màn đọc truyện</Text>
    </ScrollView>
  );
}

export default Chap;

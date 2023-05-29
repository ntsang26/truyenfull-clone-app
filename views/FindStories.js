// Tìm kiếm truyện
import { View, Text, Button, TextInput, Image, ScrollView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { TouchableOpacity } from "react-native-gesture-handler"
import moment from "moment"
import { DESC } from "../constant/view.js"
import unidecode from 'unidecode'

function FindStories({ navigation }) {
  const [content, setContent] = useState("")
  const [search, setSearch] = useState([])
  const list = useSelector((state) => state)
  const data = list.posts.posts || []
  const handleSearch = () => {
    if (!content) return
    const findStories = data.filter((item) =>
      convertStr(item.title).includes(convertStr(content)),
    )
    setSearch(findStories)
    setContent("")
  }

  return (
    <ScrollView>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ height: 40, borderBottomWidth: 1.0, width: 230 }}
          placeholder="Nhập vào tên truyện"
          onChangeText={(newText) => setContent(newText)}
          defaultValue={content}
        />
        <TouchableOpacity style={{}} onPress={handleSearch}>
          <Text style={{ fontSize: 17 }}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 20,
          marginTop: 50,
        }}
      >
        {search === undefined
          ? ""
          : search.map((item) => {
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
            )
          })}
      </View>
    </ScrollView>
  )
}
export default FindStories

const convertStr = (str = "") => {
  let result = str
  result = result.toLowerCase()
  result = unidecode(result)
  return result
}

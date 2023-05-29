// Tìm kiếm truyện
import { View, Text, TextInput, Image, ScrollView } from "react-native"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { TouchableOpacity } from "react-native-gesture-handler"
import moment from "moment"
import { DESC } from "../constant/view.js"
import unidecode from 'unidecode'

function FindStories({ navigation }) {
  const [content, setContent] = useState("")
  const [foundStory, setFoundStory] = useState([])
  const list = useSelector((state) => state)
  const data = list.posts.posts || []
  const handleSearch = () => {
    if (!content) {
      setFoundStory([])
      return
    }
    const findStories = data.filter((item) =>
      convertStr(item.title).includes(convertStr(content)),
    )
    setFoundStory(findStories)
    setContent("")
  }

  return (
    <ScrollView>
      <View
        style={{
          padding: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ height: 40, borderBottomWidth: 1.0, flex: 1, marginEnd: 20 }}
          placeholder="Nhập vào tên truyện"
          onChangeText={(newText) => setContent(newText)}
          defaultValue={content}
        />
        <TouchableOpacity onPress={handleSearch}>
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
        {foundStory === undefined
          ? ""
          : foundStory.map((item) => {
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

import { Button, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import React, { useState } from "react";
import ListItem from "./component/ListItem";
import { quesList } from "./data";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  const [list, setList] = useState(quesList);
  function submit() {
    const tempList = Taro.getStorageSync("list");
    if (tempList.some((el) => el === 0)) {
      Taro.showToast({
        icon: "error",
        title: "请完成所有题目",
      });
      return;
    }
    Taro.navigateTo({
      url: "/pages/result/index",
    });
  }
  return (
    <View className="home">
      {/* <View className="header">MBTI 人格测试</View> */}
      <View className="main-content">
        <View className="desc">
          <View className="title">免费的人格测试</View>
          <View className="sub_title">NERIS Type Explore</View>
          <View className="tipsList">
            <View className="tipsItem">共有 16 个人格类型。</View>
            <View className="tipsItem">每个人格类型都有自己的优势和劣势。</View>
            <View className="tipsItem">请诚实回答,即使你不喜欢这个答案。</View>
          </View>
        </View>
        <View className="list">
          {list.map((el, i) => {
            return (
              <ListItem key={i + el.level} {...el} setList={setList}></ListItem>
            );
          })}
        </View>
        <View
          className="submit"
          onClick={() => {
            submit();
          }}
        >
          确认提交
        </View>
      </View>
    </View>
  );
}

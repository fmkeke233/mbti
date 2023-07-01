import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import React from "react";
import "./index.less";
export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  return (
    <View className="index">
      <View className="header">头部</View>
      <View className="desc">
        <View className="title">免费的人格测试</View>
        <View className="sub_title">NERIS Type Explore</View>
      </View>
    </View>
  );
}

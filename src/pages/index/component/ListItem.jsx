import React from "react";
import { View } from "@tarojs/components";
import "./ListItem.less";

function ListItem(props) {
  const { level, title } = props;
  return (
    <View className="choice-list-item">
      <View className="choice-title">{title}</View>
      <View
        className="choice-level-list"
        onClick={(e) => {
          console.log("level", e);
        }}
      >
        <View className="level-item level-agree level-big"></View>
        <View className="level-item level-agree level-middle"></View>
        <View className="level-item level-agree level-small"></View>
        <View className="level-item level-small"></View>
        <View className="level-item level-disagree level-small"></View>
        <View className="level-item level-disagree level-middle"></View>
        <View className="level-item level-disagree level-big"></View>
      </View>
      <View className="bottom-text">
        <View className="text-item-agree">同意</View>
        <View className="text-item-disagree">反对</View>
      </View>
      {/* <View className="desc">{title}</View> */}
    </View>
  );
}
export default React.memo(ListItem);

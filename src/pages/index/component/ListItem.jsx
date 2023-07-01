import React from "react";
import { View } from "@tarojs/components";
function ListItem(props) {
  const { title, desc } = props;
  return (
    <View className="list-item">
      <View className="title">{title}</View>
      <View className="desc">{desc}</View>
    </View>
  );
}
export default React.memo(ListItem);

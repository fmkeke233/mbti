import React, { useState } from "react";
import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./ListItem.less";
import pickedImg from "../../../assets/picked.png";

function ListItem(props) {
  const { level, title, index } = props;
  const [Detail, setDetail] = useState(level);
  const changeListLevel = (num) => {
    const list = Taro.getStorageSync("list") || Array(20).fill(0);
    list[index] = num;
    Taro.setStorageSync("list", list);
  };
  return (
    <View className="choice-list-item">
      <View className="choice-title">{title}</View>
      <View
        className="choice-level-list"
        onClick={(e) => {
          console.log("level", e.target.dataset);
          const curLevel = e.target.dataset?.level;
          if (!curLevel) {
            return;
          }
          setDetail(curLevel);
          changeListLevel(curLevel);
          // setList((list) => {
          //   // list[index].level = e.target.dataset.level;
          //   // return list;
          //   return list.map((el, i) => {
          //     if (i === index) {
          //       return {
          //         ...el,
          //         level: e.target.dataset.level,
          //       };
          //     }
          //     return el;
          //   });
          // });
        }}
      >
        <View className="level-item level-agree level-big" data-level="1">
          {Detail === "1" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
        <View className="level-item level-agree level-middle" data-level="2">
          {Detail === "2" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
        <View className="level-item level-agree level-small" data-level="3">
          {Detail === "3" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
        <View className="level-item level-small" data-level="4">
          {Detail === "4" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
        <View className="level-item level-disagree level-small" data-level="5">
          {Detail === "5" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
        <View className="level-item level-disagree level-middle" data-level="6">
          {Detail === "6" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
        <View className="level-item level-disagree level-big" data-level="7">
          {Detail === "7" && (
            <Image className="picked_img" src={pickedImg} mode="aspectFill" />
          )}
        </View>
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

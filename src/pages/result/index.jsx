import { Image, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import Img from "../../assets/sb.jpg";
import "./index.less";

export default function Index() {
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    Taro.showLoading({
      title: "分析人格类型中",
    });
    const timer = setTimeout(() => {
      Taro.hideLoading();
      setShowResult(true);
      clearTimeout(timer);
    }, 3000);
    return () => {};
  }, []);

  return (
    <View className="result">
      <View className="main-content">
        <View className="top-line"></View>
        {showResult && (
          <Image className="result-image" src={Img} mode="aspectFit" />
        )}
        <View
          className="result-button"
          onClick={() => {
            Taro.showToast({
              icon: "success",
              title: "你就是老缠",
            });
          }}
        >
          确定
        </View>
      </View>
    </View>
  );
}

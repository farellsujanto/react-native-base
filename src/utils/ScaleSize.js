import React, { Component } from "react";
import { Dimensions } from "react-native";
let SCREEN_WIDTH = Dimensions.get('window').width; // get current width
let SCALE = 350; // constant, 375 is standard width of  iphone 6 / 7 / 8 

export const scaleFont = (fontSize) => {
  const ratio = fontSize / SCALE; // get ratio based on your standard scale 
  const newSize = Math.round(ratio * SCREEN_WIDTH);
  return newSize; 
}

export const getScreenWidth = () => {
  return Dimensions.get('window').width; 
}

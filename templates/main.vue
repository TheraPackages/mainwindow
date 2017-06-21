<template>
    <div :style="{ height: height, backgroundColor: 'transparent' }">
      <div class="header">
        <image class="header-pic" resize="cover" :src="pic"></image>
        <div class="header-mask"></div>
        <image class="header-decor" src="https://gw.alicdn.com/tfs/TB1aSO1QVXXXXczXpXXXXXXXXXX-960-360.png"></image>
        <text class="header-title">{{title}}</text>
      </div>
      <div v-for="(item, index) in items">
        <div class="cell" @click="goDetailClick(index)">
          <div class="above">
            <div class="top-icons">
              <text class="top-icon-text" v-if="item.tTextIcon1" :style="{ color: item.tTextColor1, backgroundColor: item.tTextBgColor1 }">{{item.tTextIcon1}}</text>
              <image class="top-icon-image" v-if="item.tImageIcon1" :style="{ width: item.tImageIconW1 }" :src="item.tImageIcon1"></image>
              <text class="top-icon-text" v-if="item.tTextIcon2" :style="{ color: item.tTextColor2, backgroundColor: item.tTextBgColor2 }">{{item.tTextIcon2}}</text>
              <image class="top-icon-image" v-if="item.tImageIcon2" :style="{ width: item.tImageIconW2 }" :src="item.tImageIcon2"></image>
              <text class="top-icon-text" v-if="item.tTextIcon3" :style="{ color: item.tTextColor3, backgroundColor: item.tTextBgColor3 }">{{item.tTextIcon3}}</text>
              <image class="top-icon-image" v-if="item.tImageIcon3" :style="{ width: item.tImageIconW3 }" :src="item.tImageIcon3"></image>
            </div>
            <div class="item-container">
              <image class="item-image" resize="cover" :src="item.img"></image>
              <div class="item-image-mask"></div>
              <div class="info-container">
                <text class="title">{{item.title}}</text>
                <text class="common-icons" v-if="item.commonIcons">{{item.commonIcons}}</text>
                <div class="recommend-container">
                    <text v-for="desc in item.descList" class="recommend-desc">{{desc}}</text>
                </div>
                <div class="bottom-container">
                  <text class="price">{{item.price}}</text>
                  <text class="bottom-icon-text" v-if="item.bTextIcons" :style="{ color: item.bIconColor, backgroundColor: item.bIconBgColor }">{{item.bTextIcons}}</text>
                  <image class="bottom-icon-image" v-if="item.bImageIcon" :style="{ width: item.bIconWidth }" :src="item.bImageIcon"></image>
                  <text class="sold">{{item.sold}}</text>
                </div>
              </div>
            </div>
          </div>
          <div class="below">
            <image class="divider" src="https://gw.alicdn.com/tfs/TB1cMO2QVXXXXXcXXXXXXXXXXXX-1035-24.png"></image>
            <div class="below-content">
              <div class="verify-container">
                <image class="verify-icon" src="https://gw.alicdn.com/tfs/TB11vL9QFXXXXa1XFXXXXXXXXXX-184-94.png"></image>
                <text class="verify-text">认证招牌技</text>
                <text class="feature-text">{{item.badge}}</text>
              </div>
              <text class="feature-desc">{{item.feature}}</text>
            </div>
          </div>
          <text style="width: 750; height: 2; background-color: #f4f4f4;"></text>
        </div>
      </div>
      <div class="footer">
        <div class="footer-button">
          <text class="footer-title" @click="goMoreClick">查看全部榜单</text>
          <image class="footer-arrow" src="https://gw.alicdn.com/tfs/TB1n_uNQVXXXXX9XpXXXXXXXXXX-21-33.png"></image>
        </div>
      </div>
      <div class="footer-end"></div>
    </div>
</template>
<style scoped="">
  .header{
    background-color: #ffffff;
    width: 750;
    height: 266;
  }
  .header-pic {
    width: 750;
    height: 190;
    position: absolute;
  }
  .header-mask {
    width: 750;
    height: 190;
    position: absolute;
    opacity: 0.3;
    background-color: #000000;
  }
  .header-decor {
    width: 640;
    height: 240;
    margin-left: 55;
    margin-top: 30;
    position: absolute;
  }
  .header-title {
    position: absolute;
    width: 330;
    margin-left: 210;
    margin-top: 164;
    text-align: center;
    font-size: 36;
    color: #000000;
    font-weight: bold;
    lines: 1;
    text-overflow: ellipsis;
  }

  .cell {
    background-color: #ffffff;
  }
  .above {
    width: 750;
    height: 272;
  }
  .top-icons {
    width: 750;
    height: 40;
    flex-direction: row;
  }
  .top-icon-text {
    font-size: 20;
    height: 30;
    padding-left: 10;
    padding-right: 10;
    text-align: center;
    padding-top: 4;
    margin-right: 2;
    font-weight: bold;
  }
  .top-icon-image {
    height: 30;
    margin-right: 2;
  }
  .item-container {
    width: 720;
    flex-direction: row;
  }
  .item-image {
    width: 216;
    height: 216;
    position: absolute;
  }
  .item-image-mask {
    width: 216;
    height: 216;
    opacity: 0.03;
    background-color: #000000;
  }
  .info-container {
    height: 222;
    margin-left: 20;
    margin-top: -6;
    justify-content: space-between;
  }
  .title {
    width: 484;
    font-size: 28;
    padding-top: 4;
    font-weight: bold;
    line-height: 36;
    color: #333333;
    lines: 2;
    text-overflow: ellipsis;
  }
  .common-icons {
    width: 484;
    margin-top: 12;
    font-size: 24;
    color: #999999;
    lines: 1;
    text-overflow: ellipsis;
  }
  .recommend-container {
    height: 74;
    flex-direction: row;
    align-items: center;
  }
  .recommend-desc {
    height: 42;
    padding-left: 12;
    padding-right: 12;
    padding-top: 8;
    padding-bottom: 8;
    margin-right: 10;
    text-align: center;
    font-size: 24;
    color: #999999;
    lines: 1;
    text-overflow: ellipsis;
    background-color: #F3F3F3;
    border-radius: 50;
  }
  .bottom-container {
    flex-direction: row;
    align-items: flex-end;
  }
  .price {
    height: 32;
    color: #FF0036;
    font-size: 32;
    margin-right: 10;
    font-weight: bold;
  }
  .bottom-icon-text {
    font-size: 20;
    padding-top: 2;
    padding-bottom: 2;
    padding-left: 6;
    padding-right: 6;
    margin-right: 10;
    color: #FF0036;
    font-weight: bold;
    background-color: #FBE9E9;
  }
  .bottom-icon-image {
    height: 24;
    margin-right: 10;
  }
  .sold {
    font-size: 20;
    color: #999999;
  }

  .below {
    height: 750;
    height: 170;
  }
  .divider {
    width: 690;
    height: 14;
    margin-left: 30;
  }
  .below-content {
    width: 720;
    height: 94;
    margin-top: 29;
    flex-direction: row;
    background-color: #ffffff;
    align-items: center;
  }
  .verify-container {
    width: 216;
    height: 94;
    align-items: center;
  }
  .verify-icon {
    width: 184;
    height: 94;
    margin-left: 30;
    position: absolute;
  }
  .verify-text {
    margin-top: 14;
    font-size: 20;
  }
  .feature-text {
    margin-top: 12;
    font-size: 30;
    font-weight: bold;
  }
  .feature-desc {
    width: 484;
    margin-left: 22;
    font-size: 24;
    line-height: 44;
    lines: 2;
    text-overflow: ellipsis;
  }

  .footer {
    background-color: #ffffff;
    height:130;
    width: 750;
    justify-content: center;
    align-items: center;
  }
  .footer-end {
    width: 750;
    height: 20;
    background-color: #f4f4f4;
  }
  .footer-button {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 254;
    height: 56;
    border-width: 2;
    border-color: #e0e0e0;
    border-radius: 50;
  }
  .footer-title {
    font-size: 28;
    lines: 1;
    color: #999999;
  }
  .footer-arrow {
    height: 22;
    width: 14;
    margin-left: 8;
  }
</style>
<script>
var navigator = weex.requireModule('event');
var userTrack = weex.requireModule('userTrack');
module.exports = {
  props: {
    height: {
      default: 0
    },

    title: {
      default: "first thera project"
    },
    pic: {
      default: "http://img.alicdn.com/imgextra/i2/2850932807/TB21h2fmYtlpuFjSspfXXXLUpXa_!!2850932807-0-fans.jpg"
    },
    url: {
      default: "tmall://page.tm/itemDetail?itemId=541366140904"
    },
    id: {
      default: "mock-id"
    },

    items: {
      default: function () {
        return [{
          title: "Estee Lauder/雅诗兰黛，小棕瓶高保湿霜套装修组合眼霜",
          img: "https://gw.alicdn.com/tfs/TB1pFWCKFXXXXcuXVXXXXXXXXXX-720-1080.jpg",
          descList: ["改变皮肤色泽不均", "提亮肤色提亮肤色", "提亮肤色"],
          price: "620.00",
          sold: "月销2422",
          itemId: "541366140904",
          badge: "淡化细纹",
          feature: "见效较快，使用后吸收很快，一星期后感觉细纹减少",
          topIconList: [{
            type: "text",
            value: {
              backgroundColor: "#ff9500",
              fontColor: "#ffffff",
              textValue: "88888",
              textSize: ""
            }
          }, {
            type: "img",
            value: {
              textSize: "",
              height: 45,
              width: 156,
              url: "https://gw.alicdn.com/tfs/TB1op9SQVXXXXa0XFXXXXXXXXXX-156-45.png"
            }
          }, {
            type: "text",
            value: {
              backgroundColor: "#ff0000",
              fontColor: "#ffffff",
              textValue: "双11",
              textSize: ""
            }
          }],
          commonIconList: [{
            type: "text",
            value: {
              backgroundColor: "#ff9500",
              fontColor: "#ffffff",
              textValue: "旗舰店",
              textSize: ""
            }
          }, {
            type: "img",
            value: {}
          }, {
            type: "text",
            value: {
              backgroundColor: "#ff9500",
              fontColor: "#ffffff",
              textValue: "极速退货",
              textSize: ""
            }
          }],
          bottomIconList: [{
            type: "text",
            value: {
              backgroundColor: "#FBE9E9",
              fontColor: "#ff0036",
              textValue: "直降200",
              textSize: ""
            }
          }]
        }, {
          img: "https://gw.alicdn.com/tfs/TB1pFWCKFXXXXcuXVXXXXXXXXXX-720-1080.jpg",
          title: "Estee Lauder/雅诗兰黛，小棕瓶高保湿霜套装修组合眼霜，小棕瓶高保湿霜套装修组合眼霜",
          descList: ["一二三四五六七八九十", "一二三四", "一二"],
          price: "1347.0",
          sold: "月销2422",
          itemId: "541366140904",
          badge: "淡化细纹",
          feature: "见效较快，使用后吸收很快"
        }];
      }
    }
  },
  created: function () {
    console.error("created");
    var num = (this.items || []).length;
    this.height = 442 * num + 266 + 150;
    this.parseIcons();
    this.formatData();

    this.customState = 'updated'
  },
  beforeUpdate: function() {
    console.error("--------------beforeUpdate");
    if (this.customState === 'updated') {
      this.customState = 'notupdated';
      var num = this.items.length;
      this.height = 442 * num + 266 + 150;
      this.parseIcons();
      this.formatData();
    }

  },
  updated: function() {
    console.error("updated");
    this.customState = 'updated';
  },
  methods: {
    formatData: function () {
      var items = this.items || [];
      for (var i = 0; i < items.length; ++i) {
        var item = items[i];
        item.feature = item.feature ? "“" + item.feature + "”" : "";
        item.price = this.formatPrice(item.price);
        item.descList = this.formatDescList(item.descList) || [];
      }
    },
    formatPrice: function (price) {
      if (price && price.indexOf('.') >= 0) {
        var end = price.length - 1;
        while (end >= 0) {
          if (price[end] === '.') {
            end--;
            break;
          }
          if (price[end] !== '0') {
            break;
          }
          end--;
        }
        price = price.substr(0, end + 1);
      }
      return price ? "￥" + price : "";
    },
    formatDescList: function (descList) {
      if (descList && descList.length > 0) {
        var tmp = [],
            len = 0;
        for (var i = 0; i < descList.length; ++i) {
          len += (descList[i] || '').length;
          if (len <= 16) {
            if (descList[i]) {
              tmp.push(descList[i]);
            }
          } else {
            break;
          }
        }
        return tmp;
      }
    },
    applyIcon: function (item, icon, textKey, textColorKey, textBgColorKey, imgWidthKey, imgUrlKey) {
      if (icon && icon.type === "text" && icon.value && icon.value.textValue) {
        item[textKey] = icon.value.textValue;
        item[textColorKey] = icon.value.fontColor ? icon.value.fontColor : "#ffffff";
        item[textBgColorKey] = icon.value.backgroundColor ? icon.value.backgroundColor : "#ff9500";
      } else if (icon && icon.type === "img" && icon.value && icon.value.height > 0 && icon.value.url) {
        item[imgWidthKey] = icon.value.width / icon.value.height * 30;
        item[imgUrlKey] = icon.value.url;
      }
    },
    parseIcons: function () {
      var items = this.items || [];
      for (var i = 0; i < items.length; ++i) {
        var item = items[i];
        var icon = null;

        // tTextIcon1 tIconColor1 tIconBgColor1 tIconWidth1 tImageIcon1
        var topIconList = item.topIconList || [];
        if (topIconList.length > 0) {
          this.applyIcon(item, topIconList[0], "tTextIcon1", "tTextColor1", "tTextBgColor1", "tImageIconW1", "tImageIcon1");
        }
        if (topIconList.length > 1) {
          this.applyIcon(item, topIconList[1], "tTextIcon2", "tTextColor2", "tTextBgColor2", "tImageIconW2", "tImageIcon2");
        }
        if (topIconList.length > 2) {
          this.applyIcon(item, topIconList[2], "tTextIcon3", "tTextColor3", "tTextBgColor3", "tImageIconW3", "tImageIcon3");
        }

        // common icon list
        var commonIconList = item.commonIconList || [];
        var commonIcons = "";
        for (var j = 0; j < commonIconList.length; ++j) {
          icon = commonIconList[j];
          if (icon && icon.type === "text" && icon.value && icon.value.textValue) {
            commonIcons += icon.value.textValue;
            if (j < commonIconList.length - 1) {
              commonIcons += " | ";
            }
          }
        }
        item.commonIcons = commonIcons;

        // bottom icon list
        var bottomIconList = item.bottomIconList || [];
        if (bottomIconList.length > 0) {
          icon = bottomIconList[0];
          this.applyIcon(item, bottomIconList[0], "bTextIcons", "bIconColor", "bIconBgColor", "bIconWidth", "bImageIcon");
        }
      }
    },

    goDetailClick: function (index) {
      console.error('goDetailClick');
      console.error(index);
      if (userTrack) {

        try {
          var item = this.items[index];
          var args = {
            click_type: "auction",
            item_id: item.itemId,
            rn: this.rn,
            bid: this.id
          };
          userTrack.commitut("click", 2101, "Page_SearchResult", "TMSearchUT_BangdanItemClick", null, null, null, args);
        } catch (err) {
          console.error("commitUt item exception: ", err);
        }
      }
      if (navigator) {
        try {
          var item = this.items[index];
          var action = "tmall://page.tm/itemDetail?itemId=" + item.itemId;
          navigator.openURL(action);
        } catch (err) {
          console.error("navigator exception: ", err);
        }
      }
    },
    goMoreClick: function (e) {
      if (userTrack) {
        try {
          var args = {
            click_type: "more",
            rn: this.rn,
            bid: this.id
          };
          userTrack.commitut("click", 2101, "Page_SearchResult", "TMSearchUT_BangdanMoreClick", null, null, null, args);
        } catch (err) {
          console.error("commitUt more exception: ", err);
        }
      }
      if (navigator) {
        try {
          var action = this.url;
          navigator.openURL(action);
        } catch (err) {
          console.error("navigator exception: ", err);
        }
      }
    }
  }
};</script>

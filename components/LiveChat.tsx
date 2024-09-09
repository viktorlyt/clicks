"use client";
import React, { useEffect } from "react";
import { IoIosChatboxes } from "react-icons/io";

const LiveChat = () => {
  useEffect(() => {
    // Create the custom element
    const callUsElement = document.createElement("call-us");
    callUsElement.setAttribute("phonesystem-url", "https://1551.3cx.cloud");
    callUsElement.setAttribute(
      "style",
      "position:fixed;font-size:16px;line-height:17px;z-index: 50;--call-us-main-accent-color:#D63004;--call-us-main-background-color:#FFFFFF;--call-us-plate-background-color:#D97E18;--call-us-plate-font-color:#E6E6E6;--call-us-main-font-color:#292929;--call-us-agent-bubble-color:#29292910;right: 15px; bottom: 80px;"
    );
    callUsElement.setAttribute("id", "wp-live-chat-by-3CX");
    callUsElement.setAttribute("minimized", "true");
    callUsElement.setAttribute("animation-style", "fadein");
    callUsElement.setAttribute("party", "viktorlytvynenko");
    callUsElement.setAttribute("minimized-style", "bubbleright");
    callUsElement.setAttribute("allow-call", "true");
    callUsElement.setAttribute("allow-video", "false");
    callUsElement.setAttribute("allow-soundnotifications", "true");
    callUsElement.setAttribute("enable-mute", "true");
    callUsElement.setAttribute("enable-onmobile", "true");
    callUsElement.setAttribute("offline-enabled", "true");
    callUsElement.setAttribute("enable", "true");
    callUsElement.setAttribute("ignore-queueownership", "false");
    callUsElement.setAttribute("authentication", "none");
    callUsElement.setAttribute("operator-name", "Paul Dimension");
    callUsElement.setAttribute("show-operator-actual-name", "false");
    callUsElement.setAttribute("aknowledge-received", "true");
    // callUsElement.setAttribute("operator-icon", "data:image/png;base64,..."); // Truncated for brevity
    callUsElement.setAttribute("gdpr-enabled", "true");
    callUsElement.setAttribute("message-userinfo-format", "both");
    callUsElement.setAttribute("message-dateformat", "both");
    callUsElement.setAttribute("lang", "browser");
    callUsElement.setAttribute("button-icon-type", "doublebubble");
    callUsElement.setAttribute("greeting-visibility", "none");
    callUsElement.setAttribute("greeting-offline-visibility", "none");
    callUsElement.setAttribute("chat-delay", "2000");
    callUsElement.setAttribute("enable-direct-call", "true");
    callUsElement.setAttribute("enable-ga", "false");

    // Append the element to the body
    document.body.appendChild(callUsElement);

    // Load the chat functionality script
    const script = document.createElement("script");
    script.src =
      "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
    script.id = "tcx-callus-js";
    script.defer = true;
    document.body.appendChild(script);

    // Clean up the element and script when the component unmounts
    return () => {
      document.body.removeChild(callUsElement);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default LiveChat;
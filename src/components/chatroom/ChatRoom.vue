<template>
  <div class="chatroom-main" @click="HiddenToolItem">
    <el-row
      justify="center"
      style="width: 80%; overflow: hidden; z-index: 2000"
      id="row"
    >
      <el-col :md="18" class="chatroom" style="position: relative">
        <div class="side-menu">
          <div>
            <div class="side-menu-item">
              <el-avatar
                shape="square"
                :src="user.user_avatar"
                style="background-color: white"
              />
            </div>
            <div class="side-menu-item" @click="activeMenu(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#f9e3ae"
                  d="M1,29.88C1,43.54,14.91,54.66,32,54.66a38.7,38.7,0,0,0,6.41-.54c1.24,2,4.68,6.13,12,7.76l.21,0a1,1,0,0,0,.83-1.47,22.19,22.19,0,0,1-2.91-9.61C57.62,46.27,63,38.47,63,29.88,63,16.21,49.09,5.09,32,5.09S1,16.21,1,29.88Z"
                ></path>
                <path
                  fill="#f6d397"
                  d="M62.36,34.95c-1.67,6.53-6.56,12.24-13.8,15.89a22.2,22.2,0,0,0,2.91,9.61,1,1,0,0,1-.83,1.47l-.21,0c-7.33-1.63-10.77-5.81-12-7.76a38.7,38.7,0,0,1-6.41.54C17.11,54.66,4.64,46.22,1.67,35a4,4,0,0,1,3.88-5H58.46A4,4,0,0,1,62.36,34.95Z"
                ></path>
                <path
                  fill="#85cbf8"
                  d="M32 11A24 19 0 1 0 32 49A24 19 0 1 0 32 11Z"
                ></path>
                <path
                  fill="#8d6c9f"
                  d="M64,29.76C64,15.65,49.64,4.17,32,4.17S0,15.65,0,29.76,14.36,55.34,32,55.34a40,40,0,0,0,6.62-.55c1.28,2,4.83,6.33,12.4,8l.22,0a1,1,0,0,0,.86-1.51,22.91,22.91,0,0,1-3-9.92C58.44,46.68,64,38.63,64,29.76ZM47.62,49.89a1,1,0,0,0-.57.95,26,26,0,0,0,2.23,9.42c-6.09-2-8.61-5.83-9.28-7.05a1,1,0,0,0-.88-.52l-.18,0a38,38,0,0,1-6.94.64c-16.54,0-30-10.58-30-23.59S15.46,6.17,32,6.17,62,16.75,62,29.76C62,38,56.63,45.56,47.62,49.89Z"
                ></path>
                <path
                  fill="#faefde"
                  d="M20 28A2 2 0 1 0 20 32 2 2 0 1 0 20 28zM32 28A2 2 0 1 0 32 32 2 2 0 1 0 32 28zM44 28A2 2 0 1 0 44 32 2 2 0 1 0 44 28z"
                ></path>
                <path
                  fill="#8d6c9f"
                  d="M31.71 45.69a1 1 0 0 0-.91 1.08l.17 2a1 1 0 0 0 1 .91h.09A1 1 0 0 0 33 48.59l-.17-2A1 1 0 0 0 31.71 45.69zM12.2 37l-1.64 1.15a1 1 0 1 0 1.14 1.64l1.64-1.15A1 1 0 0 0 12.2 37zM15.71 41.2l-1.29 1.53A1 1 0 0 0 15.95 44l1.29-1.53a1 1 0 1 0-1.53-1.29zM21.52 43.88a1 1 0 0 0-1.33.48l-.85 1.81a1 1 0 0 0 1.81.85L22 45.21A1 1 0 0 0 21.52 43.88zM26.49 45.46a1 1 0 0 0-1.16.81l-.35 2a1 1 0 0 0 .81 1.16l.18 0a1 1 0 0 0 1-.83l.35-2A1 1 0 0 0 26.49 45.46zM9 30c0-9.92 10.3-18 23-18a27.89 27.89 0 0 1 11.55 2.45 1 1 0 0 0 .83-1.82A29.91 29.91 0 0 0 32 10C18.24 10 7 19 7 30a16.31 16.31 0 0 0 .5 4 1 1 0 0 0 1 .75 1 1 0 0 0 .25 0 1 1 0 0 0 .72-1.21A14.29 14.29 0 0 1 9 30zM54.47 21.29a1 1 0 1 0-1.71 1A14.69 14.69 0 0 1 55 30c0 8.19-7.06 15.36-17.17 17.42a1 1 0 0 0 .2 2l.2 0C49.24 47.13 57 39.16 57 30A16.66 16.66 0 0 0 54.47 21.29zM50.1 18.94a1 1 0 1 0 1.42-1.41A22.82 22.82 0 0 0 48.8 15.2a1 1 0 0 0-1.18 1.62A21 21 0 0 1 50.1 18.94z"
                ></path>
              </svg>
              <span>会话</span>
            </div>
            <div class="side-menu-item" @click="activeMenu(1)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 64 64"
              >
                <rect
                  width="37"
                  height="48"
                  x="14"
                  y="5"
                  fill="#faefde"
                  rx="2"
                  ry="2"
                ></rect>
                <path
                  fill="#cda1a7"
                  d="M12,5h7a0,0,0,0,1,0,0V53a0,0,0,0,1,0,0H9a0,0,0,0,1,0,0V8A3,3,0,0,1,12,5Z"
                ></path>
                <rect
                  width="40"
                  height="6"
                  x="9"
                  y="53"
                  fill="#efd8be"
                  rx="2"
                  ry="2"
                ></rect>
                <path fill="#f9e3ae" d="M51 31H55V43H51z"></path>
                <path fill="#97e0bb" d="M51 21H55V33H51z"></path>
                <path fill="#ed7899" d="M51 11H55V23H51z"></path>
                <rect
                  width="8"
                  height="10"
                  x="31"
                  y="19"
                  fill="#fff7f0"
                  rx="4"
                  ry="4"
                ></rect>
                <path
                  fill="#f75f83"
                  d="M41 42H37a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM33 42H29a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM39 40a1 1 0 0 0 0-2H31a1 1 0 0 0 0 2z"
                ></path>
                <path
                  fill="#8d6c9f"
                  d="M19 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9A1 1 0 0 0 19 8zM15 8H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 13H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 18H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 23H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 28H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 33H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 38H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 43H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM15 48H13a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM39.24 27.62A5 5 0 0 0 40 25V23a5 5 0 0 0-10 0v2a5 5 0 0 0 .76 2.62 9 9 0 0 0-5.46 6.08 1 1 0 1 0 1.93.51 7 7 0 0 1 5.11-5 4.91 4.91 0 0 0 5.31 0 7 7 0 0 1 5.12 5 1 1 0 0 0 1.93-.51A9 9 0 0 0 39.24 27.62zM31.88 23a3.13 3.13 0 0 1 6.25 0V25a3.13 3.13 0 0 1-6.25 0z"
                ></path>
                <path
                  fill="#8d6c9f"
                  d="M56,12a2,2,0,0,0-2-2H52V7a3,3,0,0,0-3-3H12A4,4,0,0,0,8,8V56a4,4,0,0,0,4,4H47a3,3,0,0,0,3-3V53.82A3,3,0,0,0,52,51V44.62l2.89-1.45A2,2,0,0,0,56,41.38ZM52,24.62l2-1v7.76l-2,1ZM54,12v9.38l-2,1V12ZM47,58H12a2,2,0,0,1-2-2,2.26,2.26,0,0,1,2-2H48v3A1,1,0,0,1,47,58Zm3-7a1,1,0,0,1-1,1H20V17a1,1,0,0,0-2,0V52H12a3.94,3.94,0,0,0-2,.63V8a2,2,0,0,1,2-2H49a1,1,0,0,1,1,1V51Zm2-8.62V34.62l2-1v7.76Z"
                ></path>
              </svg>
              <span>联系人</span>
            </div>
            <div class="side-menu-item" @click="activeMenu(2)">
              <img
                width="24"
                length="24"
                :src="require('@/assets/images/icons/groupchat.png')"
              />
              <span> 群聊 </span>
            </div>
          </div>
          <div class="flex-grow" />
          <div class="side-menu-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 64 64"
            >
              <path
                fill="#c2cde7"
                d="M58.8,26.83l-6.66-1.67a20.47,20.47,0,0,0-1.07-2.55l3.54-5.9a2.9,2.9,0,0,0-.44-3.54L50.84,9.83a2.9,2.9,0,0,0-3.54-.44l-5.9,3.54a20.16,20.16,0,0,0-2.56-1.06L37.17,5.2A2.9,2.9,0,0,0,34.36,3H29.64a2.9,2.9,0,0,0-2.81,2.2l-1.67,6.66a20.39,20.39,0,0,0-2.55,1.07L16.7,9.39a2.9,2.9,0,0,0-3.54.44L9.83,13.16a2.9,2.9,0,0,0-.44,3.54l3.54,5.9a20.24,20.24,0,0,0-1.06,2.56L5.2,26.83A2.9,2.9,0,0,0,3,29.64v4.71a2.9,2.9,0,0,0,2.2,2.81l6.66,1.67a20.47,20.47,0,0,0,1.07,2.55L9.39,47.3a2.9,2.9,0,0,0,.44,3.54l3.33,3.33a2.9,2.9,0,0,0,3.54.44l5.9-3.54a20.16,20.16,0,0,0,2.56,1.06l1.67,6.67A2.9,2.9,0,0,0,29.64,61h4.71a2.9,2.9,0,0,0,2.81-2.2l1.67-6.66a20.39,20.39,0,0,0,2.55-1.07l5.9,3.54a2.89,2.89,0,0,0,3.54-.44l3.33-3.33a2.9,2.9,0,0,0,.44-3.54l-3.54-5.9a20.24,20.24,0,0,0,1.06-2.56l6.67-1.67A2.9,2.9,0,0,0,61,34.36V29.64A2.9,2.9,0,0,0,58.8,26.83Z"
              ></path>
              <path
                fill="#d3dded"
                d="M52.14 25.16a20.48 20.48 0 0 0-1.07-2.55l3.54-5.9a2.9 2.9 0 0 0-.44-3.54l-.67-.67L12.71 53.29c.62.59 1.26 1.14 1.93 1.67a2.88 2.88 0 0 0 2.06-.35l5.9-3.54a20.16 20.16 0 0 0 2.56 1.06l.74 3L55.1 25.9zM51.51 10.49L51 10H46.28l-.7.42L10.42 45.58l-1 1.72A2.88 2.88 0 0 0 9 48.91a28.27 28.27 0 0 0 1.77 2.32zM38.84 11.86l-.74-3L8.9 38.1l3 .74c.11.31.23.63.36.94L39.78 12.22C39.47 12.09 39.15 12 38.84 11.86z"
              ></path>
              <path
                fill="#acb7d0"
                d="M32 19A13 13 0 1 0 32 45A13 13 0 1 0 32 19Z"
              ></path>
              <path
                fill="#f9dd8f"
                d="M32 25A7 7 0 1 0 32 39A7 7 0 1 0 32 25Z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M45 31H43a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM32 42a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V43A1 1 0 0 0 32 42zM40.49 39.07a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41zM39.78 25.22a1 1 0 0 0 .71-.29l1.41-1.41a1 1 0 0 0-1.41-1.41l-1.41 1.41a1 1 0 0 0 .71 1.71zM44.43 35.94l-1.85-.75A1 1 0 1 0 41.82 37l1.85.75a1 1 0 1 0 .75-1.85zM37.22 41.74a1 1 0 1 0-1.84.78l.78 1.84A1 1 0 1 0 38 43.58zM41.21 28.09a1 1 0 0 0 1.31.53l1.84-.78A1 1 0 0 0 43.58 26l-1.84.78A1 1 0 0 0 41.21 28.09z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M59.73,26.65l-6.89-1.73a21.18,21.18,0,0,0-1.11-2.64l3.66-6.11a3,3,0,0,0-.45-3.67L51.49,9.06a3,3,0,0,0-3.66-.45l-6.11,3.66a20.85,20.85,0,0,0-2.64-1.1l-1.72-6.9A3,3,0,0,0,34.44,2H29.56a3,3,0,0,0-2.91,2.27l-1.73,6.89a21.1,21.1,0,0,0-2.64,1.11L16.18,8.61a3,3,0,0,0-3.66.45L9.06,12.51a3,3,0,0,0-.45,3.67l3.66,6.11a20.94,20.94,0,0,0-1.1,2.65l-6.9,1.72A3,3,0,0,0,2,29.56v4.88a3,3,0,0,0,2.27,2.91l6.89,1.73a21.18,21.18,0,0,0,1.11,2.64L8.61,47.82a3,3,0,0,0,.45,3.67l3.45,3.45a3,3,0,0,0,3.66.45l6.11-3.66a20.85,20.85,0,0,0,2.64,1.1l1.72,6.9A3,3,0,0,0,29.56,62h4.88a3,3,0,0,0,2.91-2.27l1.73-6.89a21.1,21.1,0,0,0,2.64-1.11l6.11,3.66a3,3,0,0,0,3.66-.45l3.45-3.45a3,3,0,0,0,.45-3.67l-3.66-6.11a20.94,20.94,0,0,0,1.1-2.65l6.9-1.72A3,3,0,0,0,62,34.44V29.56A3,3,0,0,0,59.73,26.65ZM60,34.44a1,1,0,0,1-.76,1l-6.9,1.72a2,2,0,0,0-1.4,1.3,19.83,19.83,0,0,1-1,2.4A2,2,0,0,0,50,42.75l3.66,6.11a1,1,0,0,1-.15,1.22l-3.45,3.45a1,1,0,0,1-1.22.15L42.75,50a2,2,0,0,0-1.92-.07,20,20,0,0,1-2.4,1,2,2,0,0,0-1.3,1.4l-1.72,6.9a1,1,0,0,1-1,.76H29.56a1,1,0,0,1-1-.76l-1.72-6.9a2,2,0,0,0-1.3-1.4,20,20,0,0,1-2.4-1,2,2,0,0,0-.9-.21,2,2,0,0,0-1,.28l-6.11,3.66a1,1,0,0,1-1.22-.15l-3.45-3.45a1,1,0,0,1-.15-1.22L14,42.75a2,2,0,0,0,.07-1.92,19.91,19.91,0,0,1-1-2.4,2,2,0,0,0-1.4-1.3l-6.9-1.72a1,1,0,0,1-.76-1V29.56a1,1,0,0,1,.76-1l6.9-1.72a2,2,0,0,0,1.4-1.3,19.83,19.83,0,0,1,1-2.4A2,2,0,0,0,14,21.25l-3.66-6.11a1,1,0,0,1,.15-1.22l3.45-3.45a1,1,0,0,1,1.22-.15L21.25,14a2,2,0,0,0,1.92.07,20,20,0,0,1,2.4-1,2,2,0,0,0,1.3-1.4l1.72-6.9a1,1,0,0,1,1-.76h4.88a1,1,0,0,1,1,.76l1.72,6.9a2,2,0,0,0,1.3,1.4,20,20,0,0,1,2.4,1A2,2,0,0,0,42.75,14l6.11-3.66a1,1,0,0,1,1.22.15l3.45,3.45a1,1,0,0,1,.15,1.22L50,21.25a2,2,0,0,0-.07,1.92,19.91,19.91,0,0,1,1,2.4,2,2,0,0,0,1.4,1.3l6.9,1.72a1,1,0,0,1,.76,1Z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M32,24a8,8,0,1,0,8,8A8,8,0,0,0,32,24Zm0,14a6,6,0,1,1,6-6A6,6,0,0,1,32,38Z"
              ></path>
              <path
                fill="#8d6c9f"
                d="M26.39 42.61a12 12 0 0 1 2.74-22.26 1 1 0 1 0-.48-1.94 14 14 0 0 0-3.2 26 1 1 0 0 0 .94-1.77zM33.61 20.11a12 12 0 0 1 2.12.48 1 1 0 0 0 .62-1.9 14 14 0 0 0-2.47-.56 1 1 0 1 0-.26 2zM32 30A2 2 0 1 0 32 34 2 2 0 1 0 32 30z"
              ></path>
              <path
                fill="#fff8f8"
                d="M32.5 9L33.74 11.26 36 12.5 33.74 13.74 32.5 16 31.26 13.74 29 12.5 31.26 11.26 32.5 9zM18.42 42L19.27 43.56 20.84 44.42 19.27 45.27 18.42 46.84 17.56 45.27 16 44.42 17.56 43.56 18.42 42zM46.35 19L46.94 20.07 48 20.65 46.94 21.23 46.35 22.3 45.77 21.23 44.7 20.65 45.77 20.07 46.35 19z"
              ></path></svg
            ><span>设置</span>
          </div>
        </div>
        <div style="width: 260px">
          <div class="search-btn">
            <el-input v-model="search" class="search-input" placeholder="搜索">
              <template #suffix>
                <el-icon class="el-input__icon"><Search /></el-icon> </template
            ></el-input>
          </div>
          <div class="chatroom-notify-list" ref="sessionList-0">
            <div
              v-for="(value, index) in sessionList"
              :key="index"
              ref="session"
              class="notification-item"
              :data-index="index"
              @click="startSession(index)"
            >
              <img :src="value.avatar" />
              <span>{{ value.title }}</span>
            </div>
          </div>
          <div
            class="chatroom-notify-list"
            ref="sessionList-1"
            style="display: none"
          >
            <div
              v-for="(value, index) in contactList"
              :key="index"
              ref="contact"
              class="notification-item"
              style="height: 36px"
              :data-index="index"
              @click="ShowBusinessCard(index)"
            >
              <div>
                <el-image
                  loading="lazy"
                  style="width: 36px; height: 36px"
                  :src="value.user_avatar"
                ></el-image>
              </div>
              <div style="margin-left: 20px">
                <span>{{ value.username }}</span>
              </div>
            </div>
          </div>
          <div
            class="chatroom-notify-list"
            ref="sessionList-2"
            style="display: none"
          >
            <div
              class="notification-item"
              v-for="(value, index) in groupsessionList"
              :key="index"
              :data-index="index"
              @click="EnterGroupSession($event)"
              ref="groupsession"
            >
              <img :src="value.avatar" />
              <div
                style="
                  display: flex;
                  margin-left: 20px;
                  flex-direction: column;
                  align-items: flex-start;
                "
              >
                <span>{{ value.title }}</span>
                <span
                  style="
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 180px;
                  "
                  >{{ value.announcement }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="right-body">
          <div v-if="ShowSession == 1" style="position: relative">
            <div>
              <div
                style="
                  height: 60px;
                  display: flex;
                  align-items: center;
                  margin: 0px 15px;
                "
              >
                <span style="font-size: 25px"
                  >{{ rightInfo.title }} {{ rightInfo.name }}</span
                >
                <div style="flex-grow: 1" />
                <div class="button-row" v-if="rightInfo.is_system != true">
                  <el-button size="large" link @click="GroupSessionMore">
                    <el-icon><MoreFilled /></el-icon>
                  </el-button>
                </div>
              </div>
            </div>
            <div
              style="
                height: calc(100% - 260px);
                overflow: hidden;
                display: flex;
                position: relative;
                flex: 1;
              "
            >
              <div class="loading" v-if="sessionLoading">
                <img
                  src="../../assets/images/loading/1.gif"
                  width="100"
                  height="100"
                />
              </div>
              <div
                style="
                  flex: 1;
                  height: 100%;
                  overflow-y: auto;
                  background-color: rgb(249, 249, 249);
                "
                class="session-box"
                id="session-box"
                refs="sessionBox"
              >
                <div
                  v-if="SessionHistory[rightInfo.uuid].next == null"
                  style="text-align: center"
                >
                  <span>----------到头啦！！！----------</span>
                </div>
                <div v-if="SessionHistory[rightInfo.uuid].loading"></div>
                <div>
                  <div
                    v-for="(message, index) in SessionHistory[rightInfo.uuid][
                      'msg'
                    ]"
                    :key="index"
                    ref="msg"
                  >
                    <div v-if="rightInfo.is_system">
                      <SystemNotice
                        :actor="message.actor_info"
                        :level="message.level"
                        :verb="message.verb"
                      ></SystemNotice>
                    </div>
                    <div v-else>
                      <ChatBubble
                        :message="message.message"
                        :sender="message.sender"
                        :type="message.message_type"
                        :size="message.size"
                        :tag="
                          rightInfo.lord.username == message.sender.username
                            ? 'lord'
                            : ''
                        "
                        v-if="
                          rightInfo.lord.username == message.sender.username
                        "
                      ></ChatBubble>
                      <ChatBubble
                        :message="message.message"
                        :sender="message.sender"
                        :type="message.message_type"
                        :size="message.size"
                        v-else
                      ></ChatBubble>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="height: 200px" v-if="rightInfo.is_system != true">
              <div class="toolbar-format" style="position: relative">
                <div
                  class="toolbar-progress animate__animated"
                  ref="progressComponent"
                  style="display: none"
                >
                  <el-progress
                    :text-inside="true"
                    :percentage="progress.percentage"
                    :status="progress.status"
                    :stroke-width="10"
                    :color="[
                      { color: '#F56C6C', percentage: 99 },
                      { color: '#67c23a', percentage: 100 },
                    ]"
                  />
                </div>
                <div class="toolbar-item" @click.stop="ShowToolItem('emoji')">
                  <svg
                    t="1699942838463"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1396"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M523.9 511.98m-419.5 0a419.5 419.5 0 1 0 839 0 419.5 419.5 0 1 0-839 0Z"
                      fill="#FFD629"
                      p-id="1397"
                    ></path>
                    <path
                      d="M885.2 298.58c-1.6-0.6 37.1 68.4 49.5 128.9 46.4 227-99.9 448.6-326.9 495.1-37.9 7.8-75.7 10.1-112.5 7.7-63.2-4.2-123.6-22.8-177.3-53 0 0 348.9-269.7 567.2-578.7z"
                      fill="#FF9A2C"
                      opacity=".1"
                      p-id="1398"
                    ></path>
                    <path
                      d="M922.4 383.38c73.9 216.8-52.8 456-264 525.8-36.7 12.1-108.5 28.3-184.9 19.4 0-0.5 166.62-15.7 313.54-190.74C942.88 552.16 920.2 376.98 922.4 383.38z"
                      fill="#FF9A2C"
                      opacity=".2"
                      p-id="1399"
                    ></path>
                    <path
                      d="M790 184.48c-40.9-34.6-93.6-59.3-155.8-77.3-95.5-27.6-199.4-17.7-300.6 31.5-139.3 67.7-240.1 245.9-227.6 400.2 4.2 52 10.1 101.8 30 145.5 0.5 1 1.6 1.5 2.7 1.2 21.1-6.8 218.8-73.6 375.8-190.3 213.3-158.5 292.3-296.6 275.5-310.8z"
                      fill="#FCE99A"
                      opacity=".24"
                      p-id="1400"
                    ></path>
                    <path
                      d="M188.008782 408.574552a136 234.3 54.429 1 0 381.157036-272.589938 136 234.3 54.429 1 0-381.157036 272.589938Z"
                      fill="#F9F2D7"
                      opacity=".2"
                      p-id="1401"
                    ></path>
                    <path
                      d="M616.9 326.38m-52.7 0a52.7 52.7 0 1 0 105.4 0 52.7 52.7 0 1 0-105.4 0Z"
                      fill="#211715"
                      p-id="1402"
                    ></path>
                    <path
                      d="M381.7 438.38l-77.6 125.3-15.5-8c-16-8.2-22.3-27.9-14.1-43.9l26.2-47.3-45.6-19.6c-15.7-8.1-21.9-27.4-13.8-43.1l8.2-16 132.2 52.6z"
                      fill="#211715"
                      p-id="1403"
                    ></path>
                    <path
                      d="M603 479.68c27.4 56.5 14.1 119.5-29.7 140.8s-101.6-7.2-129-63.7l30.6-8c37.4-9.7 72.1-26.6 102.9-50l25.2-19.1z"
                      fill="#F94616"
                      p-id="1404"
                    ></path>
                    <path
                      d="M514.5 567.38l8.8 6c3.6 2.5 8.3 2.8 12.2 0.7l26.9-14c3.4-1.8 5.7-5.1 6.3-8.9l1.5-10.5c1.4-10-9.4-17.1-18-11.9-9.1 5.5-20.9 11.8-35.4 17.7-8.8 3.6-10.1 15.5-2.3 20.9z"
                      fill="#E53600"
                      opacity=".68"
                      p-id="1405"
                    ></path>
                    <path
                      d="M922.4 383.38c73.9 216.8-52.8 456-264 525.8-36.7 12.1-108.5 28.3-184.9 19.4 0-0.5 122.92-45.83 275.21-216.29C910.21 531.51 920.2 376.98 922.4 383.38z"
                      fill="#FF9A2C"
                      opacity=".19"
                      p-id="1406"
                    ></path>
                    <path
                      d="M922.4 383.38c73.9 216.8-52.8 456-264 525.8-36.7 12.1-108.5 28.3-184.9 19.4 0-0.5 89.92-84.69 242.21-255.15C877.21 492.65 920.2 376.98 922.4 383.38z"
                      fill="#FF9A2C"
                      opacity=".15"
                      p-id="1407"
                    ></path>
                  </svg>
                  <div style="display: none" ref="emoji" class="emoji">
                    <EmojiPicker :native="true" @select="onSelectEmoji" />
                  </div>
                </div>
                <div class="toolbar-item">
                  <el-upload
                    v-model:file-list="uploadList"
                    action="http://127.0.0.1:8000/api/upload/"
                    multiple
                    :limit="1"
                    :data="{ uuid: this.rightInfo.uuid }"
                    :headers="{
                      Authorization: 'token ' + this.$cookies.get('token'),
                    }"
                    :before-upload="BeforeUpload"
                    :on-error="UploadFailed"
                    :on-success="UploadSuccess"
                    :on-progress="UploadProgress"
                    style="position: relative; translate: none"
                    ref="uploadComponent"
                    accept=".pdf, .doc, .docx, .xls, .xlsx,.jpg,.jpeg,.png,.gif"
                    ><div @click="uploadSubmit">
                      <svg
                        t="1699947181776"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1711"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M809.2 924.48H235.9c-89.6 0-162.9-76.6-162.9-170.3v-511.4c0-93.7 73.3-170.3 162.9-170.3l115 2c20.1 0 39.5 7.6 54.7 21.5l86 80.9c15.1 13.9 34.5 21.5 54.7 21.5h263c89.6 0 162.9 76.6 162.9 170.3v385.5c-0.1 93.7-73.4 170.3-163 170.3z"
                          fill="#6477FF"
                          p-id="1712"
                        ></path>
                        <path
                          d="M761.2 888.48H284c-116 0-210.9-94.9-210.9-210.9v-297c0-25.5 20.7-46.1 46.1-46.1h806.7c25.5 0 46.1 20.7 46.1 46.1v297c0.1 116-94.8 210.9-210.8 210.9z"
                          fill="#465CDB"
                          opacity=".69"
                          p-id="1713"
                        ></path>
                        <path
                          d="M829 738.48H216.1c-31.4 0-57-25.7-57-57v-318c0-31.4 25.7-57 57-57H829c31.4 0 57 25.7 57 57v317.9c0.1 31.4-25.6 57.1-57 57.1z"
                          fill="#FFFFFF"
                          p-id="1714"
                        ></path>
                        <path
                          d="M831 719.48H218.1c-31.4 0-57-25.7-57-57v-318c0-31.4 25.7-57 57-57H831c31.4 0 57 25.7 57 57v317.9c0.1 31.4-25.6 57.1-57 57.1z"
                          fill="#FFFFFF"
                          opacity=".16"
                          p-id="1715"
                        ></path>
                        <path
                          d="M807.3 924.48H237.8c-90.6 0-164.8-74.1-164.8-164.8v-356.2h899v356.2c0.1 90.7-74.1 164.8-164.7 164.8z"
                          fill="#6477FF"
                          p-id="1716"
                        ></path>
                        <path
                          d="M805.3 924.48H235.8c-90.6 0-164.8-74.1-164.8-164.8v-17.2h899v17.2c0.1 90.7-74.1 164.8-164.7 164.8z"
                          fill="#465CDB"
                          opacity=".14"
                          p-id="1717"
                        ></path>
                        <path
                          d="M595.6 598.48H413.1c-39.9 0-72.5-32.6-72.5-72.5s32.6-72.5 72.5-72.5h182.5c39.9 0 72.5 32.6 72.5 72.5s-32.6 72.5-72.5 72.5z"
                          fill="#5D75CE"
                          opacity=".52"
                          p-id="1718"
                        ></path>
                        <path
                          d="M585.5 583.48H423.6c-31.6 0-57.5-25.9-57.5-57.5s25.9-57.5 57.5-57.5h161.9c31.6 0 57.5 25.9 57.5 57.5s-25.9 57.5-57.5 57.5z"
                          fill="#FFD629"
                          p-id="1719"
                        ></path>
                      </svg></div
                  ></el-upload>
                </div>
                <div class="toolbar-item" @click="this.ShowSession = 2">
                  <svg
                    t="1701101945274"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="28132"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M431.9744 379.648l-280.832 436.7872c-37.9904 59.136 4.4544 136.8576 74.7008 136.8576H787.456c70.2976 0 112.7424-77.7728 74.7008-136.8576l-280.832-436.7872c-34.8672-54.3744-114.3808-54.3744-149.3504 0z"
                      fill="#4BE2AC"
                      p-id="28133"
                    ></path>
                    <path
                      d="M512 446.5152m-379.648 0a379.648 379.648 0 1 0 759.296 0 379.648 379.648 0 1 0-759.296 0Z"
                      fill="#4BE2AC"
                      p-id="28134"
                    ></path>
                    <path
                      d="M581.4272 379.648c-34.9696-54.3744-114.4832-54.3744-149.4528 0l-204.4928 318.1056c69.5808 78.7456 171.2128 128.4096 284.5184 128.4096 109.9776 0 208.9984-46.848 278.3232-121.5488l-208.896-324.9664z"
                      fill="#06CC76"
                      p-id="28135"
                    ></path>
                    <path
                      d="M512 647.5264c-110.848 0-200.96-90.1632-200.96-200.96S401.152 245.5552 512 245.5552s201.0112 90.1632 201.0112 201.0112-90.1632 200.96-201.0112 200.96z m0-320.0512c-65.6384 0-119.04 53.4016-119.04 119.0912s53.4016 119.04 119.04 119.04 119.0912-53.4016 119.0912-119.04S577.6384 327.4752 512 327.4752z"
                      fill="#FFFFFF"
                      p-id="28136"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="message-box">
                <el-input
                  id="message"
                  class="message-input"
                  v-model="message"
                  type="textarea"
                  placeholder=""
                ></el-input>
              </div>
              <div class="footer-box">
                <div>
                  <span>Enter：快捷键发送</span
                  ><el-button
                    @click="sendMessage(rightInfo.uuid, rightInfo.socket)"
                    >发送</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            style="background-color: rgb(250, 250, 250)"
            v-else-if="ShowSession == 0"
          >
            <div class="session-introduction">
              <div class="object-avatar">
                <el-avatar
                  :size="50"
                  v-if="rightInfo.avatar"
                  :src="rightInfo.avatar"
                ></el-avatar>
                <el-avatar
                  :size="50"
                  v-if="rightInfo.user_avatar"
                  :src="rightInfo.user_avatar"
                ></el-avatar>
              </div>
              <div class="object-description">
                <div class="object-tile" v-if="rightInfo.is_group">
                  <span>群名称：</span>
                  <div>{{ rightInfo.title }}</div>
                </div>
                <div class="object-name" v-else>
                  <span>用户名：</span>
                  <div>{{ rightInfo.username }}</div>
                </div>
                <div class="object-anouncement" v-if="rightInfo.announcement">
                  <span>群公告：</span>
                  <div>{{ rightInfo.announcement }}</div>
                </div>
                <div class="object-description" v-if="rightInfo.description">
                  <span>个人介绍：</span>
                  <div>{{ rightInfo.description }}</div>
                </div>
                <div class="object-owner" v-if="rightInfo.lord">
                  <span>群 主：</span>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                    "
                  >
                    <el-avatar
                      size="small"
                      :src="rightInfo.lord.avatar"
                      style="margin-right: 5px"
                    />
                    {{ rightInfo.lord.username }}
                  </div>
                </div>
                <div
                  class="object-group-members"
                  v-if="rightInfo.members_count"
                >
                  <span>群人数：</span>
                  <div>{{ rightInfo.members_count }}</div>
                </div>
                <div
                  class="object-group-type"
                  v-if="rightInfo.accessible != undefined"
                >
                  <span>类 型：</span>
                  <div v-if="rightInfo.accessible">
                    <el-icon><Unlock /></el-icon>公开群
                  </div>
                  <div v-else>
                    <el-icon><Lock /></el-icon>私密群
                  </div>
                </div>
              </div>
              <div>
                <el-button
                  v-if="rightInfo.is_group"
                  type="primary"
                  @click="JoinGroupSession(rightInfo.session_id)"
                  >发消息</el-button
                >
                <el-button v-else type="primary" @click="JoinFriendSession"
                  >开始聊天</el-button
                >
              </div>
            </div>
          </div>
          <div v-else-if="ShowSession == 2">
            <ChatVedio :uuid="this.rightInfo.uuid"></ChatVedio>
          </div>
          <div v-else style="background-color: rgb(250, 250, 250)"></div>
        </div>
        <div
          style="
            width: 200px;
            height: 100%;
            position: absolute;
            border-radius: 0px 15px 15px 0px;
            background-color: rgb(249, 249, 249);
            right: -200px;
            display: none;
            z-index: 0;
          "
          v-if="rightInfo.is_group == true && ShowSession == 1"
          class="animate__animated"
          ref="GroupMoreFunc"
        >
          <div
            style="
              margin: 5px 3px;
              flex: 1;
              display: flex;
              flex-direction: column;
            "
          >
            <el-input
              v-model="searchMembers"
              class="w-50 m-2"
              placeholder="查找群成员"
            >
              <template #prefix>
                <el-icon class="el-input__icon"><search /></el-icon>
              </template>
            </el-input>
            <div class="group-members-list">
              <div
                v-if="rightInfo.members"
                v-for="(member, index) in rightInfo.members.filter((data) => {
                  return data.members.username.indexOf(searchMembers) != -1;
                })"
                :key="member.id"
                class="group-member right-mouse"
                :data-id="index"
              >
                <img :src="member.members.user_avatar" width="40" height="40" />

                <div
                  style="
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    white-space: nowrap;
                    width: 100%;
                  "
                >
                  <span style="font-size: 14px">{{
                    member.members.username
                  }}</span>
                </div>
              </div>
            </div>
            <div style="margin: 0px 5px; width: calc(100% - 15px)">
              <el-button style="width: 100%" type="danger" @click="closeSocket"
                >关闭群聊</el-button
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div id="rcb_menu">
    <div class="rcb-menu-item" v-if="user.id != friend_info.uid">
      <span>查看信息(暂未开发)</span>
    </div>
    <div class="rcb-menu-item" v-else><span>修改信息</span></div>
    <el-divider style="margin: 0px" />
    <div
      class="rcb-menu-item"
      @click="SendNotification(user.id, 'add_friend', friend_info.uid)"
      v-if="!friend_info.is_friend && user.id != friend_info.uid"
    >
      <span>添加好友</span>
    </div>
    <div
      class="rcb-menu-item"
      v-else-if="user.id != friend_info.uid"
      @click="deleteFriendDialog = true"
    >
      <span>删除好友</span>
    </div>
  </div>
  <el-dialog
    v-model="deleteFriendDialog"
    title="删除好友"
    width="20%"
    destroy-on-close
    center
  >
    <span> 是否删除好友？ </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteFriendDialog = false">取消</el-button>
        <el-button type="primary" @click="DeleteFriend(friend_info.uid)">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import EmojiPicker from "vue3-emoji-picker";
import ChatBubble from "./ChatBubble.vue";
import SystemNotice from "./SystemNotice.vue";
import ChatVedio from "./ChatVedio.vue";
import "vue3-emoji-picker/css";
import { getUserInfo } from "../../../utils/cookie";
import { startSakura, stopSakura } from "@/assets/js/sakura";
import "@/assets/css/chatroom.css";
import "animate.css";
import { ElMessage } from "element-plus";
// import DissolveLoading from "@/components/loading/DissolveLoading";
// import "vue-cropper/dist/index.css";
// import { VueCropper } from "vue-cropper";
import { utf16toEntities, entitiestoUtf16 } from "../../../utils/transfer";
import { SendNotification } from "@/assets/js/common";
export default {
  name: "ChatRoom",
  components: {
    ChatBubble,
    EmojiPicker,
    ChatVedio,
    SystemNotice,
  },
  props: ["me"],
  watch: {
    me: function (value) {
      this.user = value;
    },
  },
  mounted() {
    startSakura();
    this.$cookies.set("token", "699072c7d66a8c8b1c73366d8fc605bcd8b1db64");
    if (!this.$cookies.get("token")) {
      this.$router.push("/user/login");
    }

    this.$axios({
      method: "get",
      Headers: { "Content-Type": "multipart/form-data" },
      url: "/api/group/session/",
    }).then((res) => {
      let _menu_item = document.getElementsByClassName("side-menu-item");
      _menu_item[this.defaultActive + 1].classList.add("active-aside");
      if (res.data) {
        var data = res.data.data;
        for (var i = 0; i < (data == null ? 0 : data.length); i++) {
          data[i]["className"] = [];
          this.groupsessionList.push(data[i]);
        }
      }
    });
    this.$axios({
      method: "get",
      Headers: { "Content-Type": "multipart/form-data" },
      url: "/api/friend/",
    }).then((res) => {
      let _menu_item = document.getElementsByClassName("side-menu-item");
      _menu_item[this.defaultActive + 1].classList.add("active-aside");
      if (res.data) {
        var data = res.data.data;
        for (var i = 0; i < (data == null ? 0 : data.length); i++) {
          this.contactList.push(data[i]);
        }
      }
    });
    if (!localStorage.getItem("userInfo")) {
      getUserInfo();
    }
    document.body.addEventListener("click", function () {
      document.querySelector("#rcb_menu").style.display = "none";
    });
  },
  data() {
    return {
      search: "",
      searchMembers: "",
      uploadList: [],
      user: {},
      deleteFriendDialog: false,
      friend_info: { is_friend: false, uid: 0, index: -1 },
      sessionLoading: false,
      progress: { percentage: 0, status: undefined },
      defaultActive: 0,
      ShowSession: -1, // 1表示展示会话，0表示展示联系人或者群聊信息，-1表示空内容
      option: {
        img: "https://avatars2.githubusercontent.com/u/15681693?s=460&v=4",
        size: 1,
        full: false,
        outputType: "png",
        canMove: false,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 160,
        autoCropHeight: 150,
        centerBox: true,
        high: true,
        max: 99999,
        fixed: true,
        fixedNumber: [1, 2],
      },
      message: "", // 会话消息内容
      activesession: -1, // 当前激活会话
      activegroupsession: -1, // 当前激活群组
      activecontact: -1, // 当前激活联系人
      sessionList: [
        {
          title: "消息通知",
          avatar: require("@/assets/images/icons/notification.png"),
          closeable: false,
          is_system: true,
          editable: false,
          uuid: this.$cookies.get("token"),
          className: [],
          socket: this.SystemSocket(),
        },
      ],
      rightInfo: {
        title: "test",
        closeable: false,
        members: [],
        socket: undefined,
      }, // 右侧主题展示信息
      groupsessionList: [],
      contactList: [],
      asideMenu: ["session", "contact", "groupsession"],
      expendTool: "",
      socket: undefined,
      SessionHistory: {},
    };
  },
  methods: {
    SendNotification,
    GroupSessionMore() {
      if (!this.$refs.GroupMoreFunc.classList.contains("animate__fadeInLeft")) {
        this.$refs.GroupMoreFunc.style.display = "flex";
        this.$refs.GroupMoreFunc.classList.add("animate__fadeInLeft");
        this.$refs.GroupMoreFunc.classList.remove("animate__fadeOutLeft");
      } else {
        this.$refs.GroupMoreFunc.classList.add("animate__fadeOutLeft");
        this.$refs.GroupMoreFunc.classList.remove("animate__fadeInLeft");
      }
    },
    DeleteFriend(friend_id) {
      try {
        this.$axios({
          method: "delete",
          url: "/api/friend/",
          data: {
            friend_id: friend_id,
          },
        }).then((res) => {
          var data = res.data;
          if (data.code === 10018) {
            ElMessage.success(data.data);
            this.friend_info.is_friend = false;
            this.rightInfo.members[this.friend_info.index].is_friend = false;
            this.contactList = this.contactList.filter((contact) => {
              contact.id != this.friend_info.uid;
            });
          } else {
            ElMessage.error(data.data);
          }
        });
      } finally {
        this.deleteFriendDialog = false;
      }
    },
    SystemSocket() {
      var socket = new WebSocket(
        "ws://127.0.0.1:8000/ws/chat/" + this.$cookies.get("token") + "/"
      );
      this.$axios({
        method: "get",
        url: "/api/system/session/message/",
        params: {
          uuid: this.$cookies.get("toekn"),
        },
      }).then((res) => {
        this.sessionLoading = false;
        if (res.data) {
          this.SessionHistory[this.$cookies.get("token")] = {
            next: res.data.next,
            previous: res.data.previous,
            loading: false,
            msg: [],
          };
          res.data.results.forEach((msg) => {
            this.SessionHistory[this.$cookies.get("token")]["msg"].unshift(msg);
          }); // 导入该群的历史记录
        }
      });
      socket.onmessage = this.WebSocketMessage;
      return socket;
    },
    loadHistoryMessage() {
      if (!document.getElementById("session-box").scrollTop) {
        var has_next = this.SessionHistory[this.rightInfo.uuid].next;
        var uuid = this.rightInfo.uuid;
        this.SessionHistory[uuid].loading = true;
        var length = this.SessionHistory[uuid].msg.length;
        if (has_next) {
          this.$axios({
            method: "get",
            Headers: { "Content-Type": "multipart/form-data" },
            url: has_next,
          })
            .then((res) => {
              var data = res.data;
              data.results.forEach((msg, index) => {
                this.SessionHistory[uuid]["msg"].unshift(msg);
                this.$nextTick(function () {
                  document.getElementById("session-box").scrollTop +=
                    this.$refs.msg[length + index].scrollHeight;
                });
              });
              this.SessionHistory[uuid].next = data.next;
              this.SessionHistory[uuid].previous = data.previous;
            })
            .finally(() => {
              this.SessionHistory[uuid].loading = false;
            });
        }
      }
    },

    startSession(index) {
      var that = this;
      this.ActiveItem(index);
      this.ShowSession = 1;
      this.rightInfo = this.sessionList[index];
      this.socket = this.sessionList[index].socket;
      this.$nextTick(() => {
        document
          .getElementById("session-box")
          .addEventListener("scroll", this.loadHistoryMessage);
        const f = Array.from(document.getElementsByClassName("right-mouse"));
        const rightMenu = document.querySelector("#rcb_menu");
        f.forEach((el, index) => {
          el.addEventListener("contextmenu", function (e) {
            var dom = e.target.parentNode;
            var member = that.rightInfo.members[Number(dom.dataset.id)];
            if (!dom.classList.contains("group-member")) {
              return;
            }
            that.friend_info = {
              uid: member.members.id,
              is_friend: member.is_friend,
              index: index,
            };

            e.preventDefault();
            rightMenu.style.display = "block";
            let x = e.clientX,
              y = e.clientY,
              menuWidth = rightMenu.offsetWidth,
              menuHeight = rightMenu.offsetHeight,
              htmlWidth = document.body.clientWidth,
              htmlHeight = document.body.clientHeight;
            if (x + menuWidth < htmlWidth) rightMenu.style.left = x + "px";
            else rightMenu.style.left = htmlWidth - menuWidth + "px";
            if (y + menuHeight < htmlHeight) rightMenu.style.top = y + "px";
            else rightMenu.style.top = htmlHeight - menuHeight + "px";
          });
        });
      });
    },
    JoinGroupSession() {
      if (!this.rightInfo.accessible) {
        this.$swal({
          text: "请输入群密码",
          type: "question",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "確定",
          cancelButtonText: "取消",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$axios({
              method: "post",
              Headers: { "Content-Type": "multipart/form-data" },
              url: "/api/session/check/",
              data: {
                p: result.value,
                id: this.rightInfo.session_id,
              },
            }).then((res) => {
              if (!res.data.data.verify) {
                this.$swal.fire({
                  icon: "error",
                  title: "密码错误，验证失败！",
                });
              } else {
                this.addNewSession();
              }
            });
          }
        });
      } else {
        this.addNewSession();
      }
    },
    addNewSession() {
      this.$router.push({
        path: "chatroom",
        query: { session_uuid: this.rightInfo.uuid },
      });
      var index;
      // websocket连接
      if (!this.SessionHistory[this.rightInfo.uuid]) {
        this.rightInfo.socket = this.createSocket(
          this.rightInfo.uuid,
          "/api/group/session/message/"
        );
        this.sessionList.push(this.rightInfo);
        index = this.sessionList.length - 1;
        this.SessionHistory[this.rightInfo.uuid] = {};
      } else {
        this.sessionList.forEach((el, _index) => {
          if (el.uuid == this.rightInfo.uuid) {
            index = _index;
          }
        });
      }
      this.activeMenu(0);
      this.startSession(index);
    },
    createSocket(uuid, url) {
      var socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/" + uuid + "/");
      this.sessionLoading = true;
      this.$axios({
        method: "get",
        url: url,
        params: {
          uuid: uuid,
        },
      }).then((res) => {
        this.sessionLoading = false;
        if (res.data) {
          this.SessionHistory[uuid] = {
            next: res.data.next,
            previous: res.data.previous,
            loading: false,
            msg: [],
          };
          res.data.results.forEach((msg) => {
            this.SessionHistory[uuid]["msg"].unshift(msg);
            this.$nextTick(function () {
              var box = document.getElementById("session-box");
              box.scrollTop = box.scrollHeight;
            });
          }); // 导入该群的历史记录
        }
      });
      socket.onmessage = this.WebSocketMessage;
      return socket;
    },

    WebSocketMessage(e) {
      var message = JSON.parse(e.data);
      console.log(message);
      if (message.type) {
        message.message = entitiestoUtf16(message.message);
        this.SessionHistory[message.uuid]["msg"].push(message);
      } else {
        message.message = message.message;
        this.SessionHistory[message.uuid]["msg"].push(message);
      }

      this.$nextTick(function () {
        var box = document.getElementById("session-box");
        box.scrollTop = box.scrollHeight;
      });
    },
    onSelectEmoji(emoji) {
      var elInput = document.getElementById("message");
      var startPos = elInput.selectionStart; // input 第0个字符到选中的字符
      var endPos = elInput.selectionEnd; // 选中的字符到最后的字符
      if (startPos === undefined || endPos === undefined) return;
      var txt = elInput.value;

      var result = `${txt.substring(0, startPos)}${emoji.i}${txt.substring(
        endPos
      )}`;

      elInput.value = result; // 赋值给input的value
      elInput.focus();
      elInput.selectionStart = startPos + emoji.u.length;
      elInput.selectionEnd = startPos + emoji.u.length;
      this.message = result; // 赋值给表单中的的字段
    },
    HiddenToolItem() {
      if (this.expendTool != "") {
        this.$refs[this.expendTool].style.display = "none";
        this.expendTool = "";
      }
    },
    ShowToolItem(toolName) {
      this.$refs[toolName].style.display = "block";
      this.expendTool = toolName;
    },
    cleanActive(index) {
      var _leave_menu = this.asideMenu[this.defaultActive];
      if (this["active" + _leave_menu] >= 0) {
        // 切换侧边栏时,去除已激活的session-is-active类名
        this.removeItemActive(_leave_menu);
        this["active" + _leave_menu] = -1;
      }

      var _menu = this.asideMenu[index];
      let _chosen = this["active" + _menu];
      if (_chosen < 0) {
        return;
      }
      this.removeItemActive(_menu);
      _chosen = -1;
    },
    activeMenu(index) {
      if (this.defaultActive == index) {
        return;
      }
      let _menu_item = document.getElementsByClassName("side-menu-item");
      _menu_item[this.defaultActive + 1].classList.remove("active-aside");
      _menu_item[index + 1].classList.add("active-aside");
      this.cleanActive(index);

      this.$refs["sessionList-" + index.toString()].style.display = "block";
      this.$refs["sessionList-" + this.defaultActive.toString()].style.display =
        "none";

      this.defaultActive = index;
    },
    ActiveItem(index) {
      // 给选中的对象添加阴影背景
      var target_index = index;
      var session_part = this.asideMenu[this.defaultActive];

      if (target_index == this["active" + session_part]) {
        return;
      }
      if (this["active" + session_part] != -1) {
        this.removeItemActive(session_part);
      }

      // this[session_part + "List"][target_index].className.push();
      this.$nextTick(function () {
        this.$refs[session_part][target_index].classList.add(
          "session-is-active"
        );
      });
      this["active" + session_part] = target_index;
    },
    removeItemActive(session_part) {
      this.$refs[session_part][this["active" + session_part]].classList.remove(
        "session-is-active"
      );
    },
    sendMessage(uuid, socket) {
      if (socket.readyState == 1) {
        socket.send(
          JSON.stringify({
            message: utf16toEntities(this.message),
            sender: JSON.parse(localStorage.getItem("userInfo")),
            uuid: uuid,
            message_type: 1,
          })
        );
      }
    },
    BeforeUpload(file) {
      const allow_ext = [
        "jpg",
        "gif",
        "png",
        "jpeg",
        "pdf",
        "word",
        "xlsx",
        "xls",
      ];
      var ext = file.name.substr(file.name.lastIndexOf(".") + 1);
      if (allow_ext.indexOf(ext) == -1) {
        ElMessage.error(
          `不支持${ext}后缀文件，仅支持后缀名：${allow_ext.join()}`
        );
        return false;
      }
      this.$refs.progressComponent.classList.remove("animate__fadeOutDown");
      this.$refs.progressComponent.classList.add("animate__fadeInUp");
      this.$refs.progressComponent.style.display = "block";
    },
    UploadSuccess(response) {
      ElMessage.success(response.data);
      this.cleanUpload();
    },
    UploadFailed(response) {
      ElMessage.error(response.data);
      this.cleanUpload();
    },
    uploadSubmit() {
      this.progress = { percentage: 0, status: undefined };
      this.$refs.uploadComponent.submit();
    },
    cleanUpload() {
      this.uploadList = [];
      this.$refs.progressComponent.classList.add("animate__fadeOutDown");
      this.$refs.progressComponent.classList.remove("animate__fadeInUp");
    },
    UploadProgress(evt) {
      this.progress.percentage = Math.ceil(evt.percent);
      if (this.progress.percentage == 100) {
        this.progress.status = "success";
      }
    },
    closeSocket() {
      // 断开会话
      if (this.rightInfo.socket.readyState == 1) {
        this.rightInfo.socket.close();
        this.cleanHistory(this.rightInfo.uuid);
        this.sessionList.splice(this.activesession, 1);
        this.ShowSession = -1;
        this.activesession = -1;
        this.rightInfo = {
          title: "test",
          closeable: false,
          members: [],
          socket: undefined,
        };
        this.GroupSessionMore();
      }
    },
    cleanHistory(uuid) {
      // 清除会话本地记录
      delete this.SessionHistory[uuid];
    },
    EnterGroupSession(event) {
      // 开启群组会话
      var index = event.currentTarget.dataset.index;
      this.ActiveItem(index);
      this.rightInfo = this.groupsessionList[index];
      this.rightInfo.is_group = true;
      this.ShowSession = 0;
    },
    ShowBusinessCard(index) {
      this.ActiveItem(index);
      this.rightInfo = this.contactList[index];
      this.ShowSession = 0;
    },
    JoinFriendSession() {},
  },
  beforeUpdate() {
    // 退出前断开所有socket
    for (var i in this.sessionList) {
      if (i.socket != undefined) {
        i.socket.close();
      }
    }
  },
};
</script>
<style scoped>
.toolbar-progress >>> .el-progress-bar__innerText {
  display: block;
}
</style>

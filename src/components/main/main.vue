<template>
  <Layout class="main">
    <Header class="header-con">
      <Row>
        <i-col span="4" offset="1">
          <div class="logo-con">
            <img :src="maxLogo" key="max-logo" />
            <!--<img v-show="collapsed" :src="minLogo" key="min-logo" />-->
          </div>
        </i-col>
        <i-col span="14">
          <div style="width: 100%; height: 1px"></div>
          <!--<Input class="search-con" search enter-button="查询" placeholder="请输入查询内容..." />-->
        </i-col>
        <i-col span="4">
          <Row>
            <i-col span="8">
              <user :user-avator="userAvator"/>
              <!--<Dropdown>-->
                <!--<Avatar src="@/assets/images/logo-min.jpg"/>-->
                <!--<DropdownMenu slot="list">-->
                  <!--<DropdownItem name="logout">退出登录</DropdownItem>-->
                <!--</DropdownMenu>-->
              <!--</Dropdown>-->
              </i-col>
            <i-col span="8">
              <Dropdown>
                <Badge :count="count" :offset="[20, 4]">
                  <Icon type="md-notifications-outline" size="24"/>
                </Badge>
                <DropdownMenu slot="list">
                  <Tabs value="notification" class="notification">
                    <TabPane label="通知" name="notification">通知的内容</TabPane>
                    <TabPane label="关注" name="follow">关注的内容</TabPane>
                    <TabPane label="系统" name="system">系统的内容</TabPane>
                  </Tabs>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </Header>
    <Content class="content-wrapper">
      <router-view/>
    </Content>
  </Layout>
</template>

<script>
import Fullscreen from './components/fullscreen'
import User from './components/user'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.png'
import './main.less'

export default {
  name: 'Main',
  components: {
    User,
    Fullscreen
  },
  data () {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      count: 2,
      isFullscreen: false
    }
  },
  computed: {
    userAvator () {
      return 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"'
      // return this.$store.state.user.avatorImgPath
    }
  }

}
</script>

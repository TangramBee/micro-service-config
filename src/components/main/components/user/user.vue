<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <DropdownMenu slot="list">
        <!--<DropdownItem name="me">我的主页</DropdownItem>-->
        <!--<DropdownItem name="set">设置</DropdownItem>-->
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogOut().then(() => {
            this.$router.push({
              name: 'login'
            })
          })
          break
        // case 'me':
        //   this.$router.push('/detail/me')
        //   break
        // case 'set':
        //   alert('开发中...')
        //   break
      }
    }
  }
}
</script>

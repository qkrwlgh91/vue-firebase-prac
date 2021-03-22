<template>
    <div>
    <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-content>
          {{ item.title }}
        </v-list-item-content>
      </v-list-item>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'home',
          to: '/'
        },
        {
          title: 'about',
          to: '/about'
        },
        {
          title: 'order-confirm',
          to: '/order-confirm'
        },
        {
          title: 'order-decide',
          to: '/order-decide'
        },
        {
          title: 'logistics-assignment-local-setting-popup',
          to: '/logistics-assignment-local-setting-popup'
        },
        {
          title: 'list-pdo-popup',
          to: '/list-pdo-popup'
        },
        {
          title: 'gift-setting',
          to: '/gift-setting'
        },
        {
          title: 'order-confirm-order-print-form-popup',
          to: '/order-confirm-order-print-form-popup'
        },
        {
          title: 'set-order-confirm-order-print-form-popup',
          to: '/set-order-confirm-order-print-form-popup'
        },
        {
          title: 'mall-order-form-popup',
          to: '/mall-order-form-popup'
        },
        {
          title: 'excel_export',
          to: '/excel_export'
        }
      ]
    }
  }
}
</script>

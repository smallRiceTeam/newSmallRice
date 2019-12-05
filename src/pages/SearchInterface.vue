<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 09:40:55
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 14:48:50
 -->
<template>
   <div>
      <searchFor></searchFor>
      <SearchContent></SearchContent>
   </div> 
</template>
            
<script>

import searchFor from '../components/searchFor';
import SearchContent from '../components/SearchContent';

export default {
   name:'SearchInterface',
   data() {
      return {
      }
   },

   components:{
        searchFor,SearchContent
   }
}
</script>
            
<style scoped lang="scss">
            
</style>

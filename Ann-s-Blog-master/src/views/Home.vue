<template>
  <div class="home">
    <div class="slick-nav-menu">
      <div class="nav-menu">
        <div class="logo">
          <a href="/"></a>
          </div>
        <div class="side-menu" @click="showTreeView">
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
        </div>
      </div>
      <transition name="slick-fade">
        <tree-view v-show="isShow" class="tree-view"></tree-view>
      </transition>
    </div>
    <scroll class="content"
            :probe-type = "3">
            <ul>
              <li>我是内容哈哈哈1</li>
              <li>我是内容哈哈哈2</li>
              <li>我是内容哈哈哈3</li>
              <li>我是内容哈哈哈4</li>
              <li>我是内容哈哈哈5</li>
              <li>我是内容哈哈哈6</li>
              <li>我是内容哈哈哈7</li>
              <li>我是内容哈哈哈8</li>
              <li>我是内容哈哈哈9</li>
              <li>我是内容哈哈哈10</li>
              <li>我是内容哈哈哈11</li>
              <li>我是内容哈哈哈12</li>
              <li>我是内容哈哈哈13</li>
              <li>我是内容哈哈哈14</li>
              <li>我是内容哈哈哈15</li>
              <li>我是内容哈哈哈16</li>
              <li>我是内容哈哈哈17</li>
              <li>我是内容哈哈哈18</li>
              <li>我是内容哈哈哈19</li>
              <li>我是内容哈哈哈20</li>
              <li>我是内容哈哈哈21</li>
              <li>我是内容哈哈哈22</li>
              <li>我是内容哈哈哈23</li>
              <li>我是内容哈哈哈24</li>
              <li>我是内容哈哈哈25</li>
              <li>我是内容哈哈哈26</li>
              <li>我是内容哈哈哈27</li>
              <li>我是内容哈哈哈28</li>
              <li>我是内容哈哈哈29</li>
              <li>我是内容哈哈哈30</li>
              <li>我是内容哈哈哈31</li>
              <li>我是内容哈哈哈32</li>
              <li>我是内容哈哈哈33</li>
              <li>我是内容哈哈哈34</li>
              <li>我是内容哈哈哈35</li>
              <li>我是内容哈哈哈36</li>
              <li>我是内容哈哈哈37</li>
              <li>我是内容哈哈哈38</li>
              <li>我是内容哈哈哈39</li>
              <li>我是内容哈哈哈40</li>
              <li>我是内容哈哈哈41</li>
              <li>我是内容哈哈哈42</li>
              <li>我是内容哈哈哈43</li>
              <li>我是内容哈哈哈44</li>
              <li>我是内容哈哈哈45</li>
              <li>我是内容哈哈哈46</li>
              <li>我是内容哈哈哈47</li>
              <li>我是内容哈哈哈48</li>
              <li>我是内容哈哈哈49</li>
              <li>我是内容哈哈哈50</li>
              <li>我是内容哈哈哈51</li>
              <li>我是内容哈哈哈52</li>
              <li>我是内容哈哈哈53</li>
              <li>我是内容哈哈哈54</li>
              <li>我是内容哈哈哈55</li>
              <li>我是内容哈哈哈56</li>
              <li>我是内容哈哈哈57</li>
              <li>我是内容哈哈哈58</li>
              <li>我是内容哈哈哈59</li>
              <li>我是内容哈哈哈60</li>
              <li>我是内容哈哈哈61</li>
              <li>我是内容哈哈哈62</li>
              <li>我是内容哈哈哈63</li>
              <li>我是内容哈哈哈64</li>
              <li>我是内容哈哈哈65</li>
              <li>我是内容哈哈哈66</li>
              <li>我是内容哈哈哈67</li>
              <li>我是内容哈哈哈68</li>
              <li>我是内容哈哈哈69</li>
              <li>我是内容哈哈哈70</li>
              <li>我是内容哈哈哈71</li>
              <li>我是内容哈哈哈72</li>
              <li>我是内容哈哈哈73</li>
              <li>我是内容哈哈哈74</li>
              <li>我是内容哈哈哈75</li>
              <li>我是内容哈哈哈76</li>
              <li>我是内容哈哈哈77</li>
              <li>我是内容哈哈哈78</li>
              <li>我是内容哈哈哈79</li>
              <li>我是内容哈哈哈80</li>
              <li>我是内容哈哈哈81</li>
              <li>我是内容哈哈哈82</li>
              <li>我是内容哈哈哈83</li>
              <li>我是内容哈哈哈84</li>
              <li>我是内容哈哈哈85</li>
              <li>我是内容哈哈哈86</li>
              <li>我是内容哈哈哈87</li>
              <li>我是内容哈哈哈88</li>
              <li>我是内容哈哈哈89</li>
              <li>我是内容哈哈哈90</li>
              <li>我是内容哈哈哈91</li>
              <li>我是内容哈哈哈92</li>
              <li>我是内容哈哈哈93</li>
              <li>我是内容哈哈哈94</li>
              <li>我是内容哈哈哈95</li>
              <li>我是内容哈哈哈96</li>
              <li>我是内容哈哈哈97</li>
              <li>我是内容哈哈哈98</li>
              <li>我是内容哈哈哈99</li>
              <li>我是内容哈哈哈100</li>
            </ul>
              
        <!-- <router-view></router-view> -->
    </scroll>
  </div>
</template>

<script>
  import TreeView from "components/common/TreeView"
  import Scroll from "components/common/scroll/Scroll"
  
  export default {
    data() {
      return {
        isShow: false
      }
    },
    components: {
      TreeView,
      Scroll
    },
    methods: {
      showTreeView() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
    position: relative;
  }
  .slick-nav-menu {
    border-bottom: 1px solid #927f61;
    background-color: rgba(47,46,44,0.85);
    height: 50px;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .nav-menu {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  
  .logo {
    width: 110px;
    height: 40px;
  }

  .logo a {
    background: url("../assets/img/logo.png") no-repeat center center;
    width: 100%;
    height: 100%;
    display: block;
  }
  .side-menu {
    width: 1.125em;
    margin: 10px 5px 10px 0;
  }
  .side-menu .nav-icon-bar {
    display: block;
    height: 0.125em;
    width: 1.125em;
    background-color: #927f61;
    border-radius: 0;
    margin-bottom: 5px;
  }

  .tree-view {
    position: absolute;
    top: 49px;
    left: 0;
  }
  .content {
    background-color: rgb(240, 47, 47);
    width: 100%;

    position: absolute;
    top: 50px;
    bottom: 0;
  }

  .slick-fade-enter, .slick-fade-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
  .slick-fade-enter-active, .slick-fade-leave-active {
    transition: all .8s ease;
  }
</style>
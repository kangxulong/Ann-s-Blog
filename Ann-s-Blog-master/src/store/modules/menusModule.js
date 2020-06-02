let menus = [
  { 
    id: 1,
    level: 1,
    name: 'Overview',
    type: 'button',
    isExpanded: false,
    isSelected: false,
    subMenu: [
      { id: 11, level: 2, name: 'Quick Qortfolio', type: 'link', url: '/overview/quick-qortfolio'},
      { id: 21, level: 2, name: 'Personal Work', type: 'link', url: '/overview/personal-work'},
      { id: 31, level: 2, name: 'Celebrity', type: 'link', url: '/overview/celebrity'},
    ]
  },
  { 
    id: 2,
    level: 1,
    name: 'motion',
    type: 'link',
    url: '/motion'
  },
  { 
    id: 3,
    level: 1,
    name: 'abc',
    type: 'button',
    isExpanded: false,
    isSelected: false,
    subMenu: [
      { id: 11, level: 2, name: 'a', type: 'link', url: '/abc/a'},
      { id: 21, level: 2, name: 'b', type: 'link', url: '/abc/b'},
      { id: 31, level: 2, name: 'c', type: 'link', url: '/abc/c'},
    ]
  },
]
let startExpand = []; //保存刷新后当前要展开的菜单项
function setExpand(source, url) {
  let sourceItem = '';
  for (let i = 0; i < source.length; i++) {
    sourceItem = JSON.stringify(source[i]) //将菜单项转化为字符串
    if( sourceItem.indexOf(url) > -1 ) { //查找当前url对应的子菜单属于哪个父菜单
      if(source[i].type === 'button') {
        source[i].isExpanded = true; // 设置为展开
        source[i].isSelected = true; // 设置选中高亮
        
        startExpand.push(source[i]);

        // 递归下一级菜单
        setExpand(source[i].subMenu, url);
      }
      break;
    }
  }
}

const state = {
  menus
};

const mutations = {
  findParents(state, payload) {
    if(payload.menu.type === 'button') { //如果传入的type为button，则点击在“展开”与“关闭”间切换
      // payload.menu.isSelected = true;
      payload.menu.isExpanded = !payload.menu.isExpanded;
    }else if(payload.menu.type === 'link') {
      if (startExpand.length > 0) { // ???
        for ( let i = 0; i<startExpand.length; i++) {
          startExpand[i].isSelected = false;
        }
      }
      startExpand = []; //清空展开菜单
      setExpand(state.menus, payload.menu.url);
    };
  },
  firstInit(state, payload) { //初始化组件
    setExpand(state.menus, payload.url)
  }
}

export default {
  state,
  mutations
};
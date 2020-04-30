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
  }
]

const state = {
  menus
};

const mutations = {

}

export default {
  state,
  mutations
};
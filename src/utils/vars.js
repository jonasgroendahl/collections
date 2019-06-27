const API_URL = "http://localhost:3001";

const collections = [
  {
    id: 1,
    name: "test 1",
    type: "featured",
    playerType: "bike",
    start: "2019-06-20",
    end: "2019-06-20",
    active: true,
    description: "",
    selectedVirtual: [1, 3, 2],
    selectedWeb: [1],
    selected: []
  },
  {
    id: 2,
    name: "test 2",
    type: "featured",
    playerType: "gx",
    start: "2019-06-20",
    end: "2019-06-20",
    active: true,
    description: "",
    selectedVirtual: [1, 4, 2],
    selectedWeb: [1],
    selected: []
  },
  {
    id: 3,
    name: "test 3",
    type: "campaign",
    playerType: "bike",
    start: "2019-06-20",
    end: "2019-06-20",
    active: true,
    description: "",
    selectedVirtual: [1, 3, 2],
    selectedWeb: [1],
    selected: []
  },
  {
    id: 4,
    name: "test",
    type: "campaign",
    playerType: "bike",
    start: "2019-06-20",
    end: "2019-06-20",
    active: true,
    description: "",
    selectedVirtual: [3, 1, 2],
    selectedWeb: [1],
    selected: []
  },
  {
    id: 5,
    name: "test",
    type: "campaign",
    playerType: "bike",
    start: "2019-06-20",
    end: "2019-06-20",
    active: true,
    description: "",
    selectedVirtual: [5, 3, 2],
    selectedWeb: [1],
    selected: []
  },
  {
    id: 6,
    name: "test",
    type: "automated",
    playerType: "bike",
    start: "2019-06-20",
    end: "2019-06-20",
    active: false,
    description: "",
    selectedVirtual: [4, 1, 2],
    selectedWeb: [1],
    selected: []
  }
];

const players = [
  {
    id: 0,
    name: "player x",
    clubId: 34,
    chainId: 4,
    selectedWeb: 0,
    selectedVirtual: 1,
    selected: false
  },
  {
    id: 1,
    name: "player x",
    clubId: 34,
    chainId: 4,
    selectedWeb: 0,
    selectedVirtual: 1,
    selected: false
  },
  {
    id: 2,
    name: "player x",
    clubId: 34,
    chainId: 4,
    selectedWeb: 0,
    selectedVirtual: 1,
    selected: false
  },
  {
    id: 3,
    name: "player x",
    clubId: 34,
    chainId: 2,
    selectedWeb: 1,
    selectedVirtual: 1,
    selected: false
  }
];

const providersRaw = [
  {
    id: 1,
    name: "test1_provider",
    titles: 43,
    active: true,
    selected: false
  },
  {
    id: 2,
    name: "test2_provider",
    titles: 43,
    active: true,
    selected: false
  },
  {
    id: 3,
    name: "test3_provider",
    titles: 43,
    active: false,
    selected: false
  },
  {
    id: 4,
    name: "test4_provider",
    titles: 43,
    active: false,
    selected: false
  }
];

const clients = [{ id: 1, name: "24 Hour fitness" }, { id: 2, name: "McFit" }];

const rawTitles = {
  1: { id: 1, name: "title 1", providerId: 1, providerName: "hey", equipment: ["Barbells", "Test"], active: 1, instructor: "Crazy joe" },
  2: { id: 2, name: "title 3", providerId: 2, providerName: "hey", equipment: ["Barbells"], active: 1, instructor: "Crazy joe" },
  3: { id: 3, name: "title 4", providerId: 1, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  4: { id: 4, name: "title 5", providerId: 4, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  5: { id: 5, name: "title 6", providerId: 1, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  6: { id: 6, name: "title", providerId: 4, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  7: { id: 7, name: "title", providerId: 1, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  8: { id: 8, name: "title", providerId: 1, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  9: { id: 9, name: "title", providerId: 1, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" },
  10: { id: 10, name: "title", providerId: 1, providerName: "hey", equipment: ["Barbells"], active: 0, instructor: "Crazy joe" }
};

const titles = Object.keys(rawTitles).reduce((acc, key) => {
  const item = rawTitles[key];
  const provider = providersRaw.find(el => el.id === item.providerId);
  acc[key] = { ...item, providerName: provider.name };
  return acc;
}, {});

export { API_URL, collections, titles, players, providersRaw, clients };

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
    selectedVirtual: [0, 1, 2],
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
    selectedVirtual: [0, 1, 2],
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
    selectedVirtual: [0, 10, 2],
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

const titles = {
  0: { id: 0, name: "title 1 ", providerId: 1, providerName: "hey" },
  1: { id: 1, name: "title 2", providerId: 1, providerName: "hey" },
  2: { id: 2, name: "title 3", providerId: 1, providerName: "hey" },
  3: { id: 3, name: "title 4", providerId: 1, providerName: "hey" },
  4: { id: 4, name: "title 5", providerId: 1, providerName: "hey" },
  5: { id: 5, name: "title 6", providerId: 1, providerName: "hey" },
  6: { id: 6, name: "title", providerId: 1, providerName: "hey" },
  7: { id: 7, name: "title", providerId: 1, providerName: "hey" },
  8: { id: 8, name: "title", providerId: 1, providerName: "hey" },
  9: { id: 9, name: "title", providerId: 1, providerName: "hey" },
  10: { id: 10, name: "title", providerId: 1, providerName: "hey" }
};

export { API_URL, collections, titles };

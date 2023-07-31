const cities = [
    "Agra",
    "Allahabad",
    "Aligarh",
    "Ambedkar Nagar",
    "Auraiya",
    "Azamgarh",
    "Barabanki",
    "Bijnor",
    "Ballia",
    "Banda",
    "Nagar",
    "Etawah",
    "Firozabad",
    "Farrukhabad",
    "Fatehpur",
    "Faizabad",
    "Gautam Buddh Nagar",
    "Gonda",
    "Ghazipur",
    "Gorakhpur",
    "Ghaziabad",
    "Hamirpur",
    "Hardoi",
    "Mahamaya Nagar",
    "Jhansi",
    "Jalaun",
    "Jaipur",
    "Jyotiba Phule Nagar",
    "Jaunpur district",
    "Ramabai Nagar (Kanpur Dehat)",
    "Kannauj",
    "Kanpur",
    "Kaushambi",
    "Kushinagar",
    "Raebareli",
    "Saharanpur",
    "Sitapur",
    "Shahjahanpur",
    "Sant Kabir Nagar",
    "Siddharthnagar",
    "Sonbhadra",
    "Sant Ravidas Nagar",
    "Sultanpur",
    "Shravasti",
    "Unnao",
    "Varanasi",
    "Srikakulam",
    "Nellore",
    "Visakhapatnam",
    "Vizianagaram",
    "Warangal",
    "Eluru",
    "Kadapa",
    "Anjaw",
    "Changlang",
    "East Siang",
    "Kurung Kumey",
    "Lohit",
    "Lower Dibang Valley",
    "Lower Subansiri",
    "Papum Pare",
    "Tawang",
    "Tirap",
    "Dibang Valley",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "Udalguri",
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
    "Chandigarh",
    "Bastar",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Jashpur",
    "Janjgir-Champa",
    "Korba",
    "Koriya",
    "Kanker",
    "Kabirdham (Kawardha)",
    "Mahasamund",
    "Narayanpur",
    "Raigarh",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "South Delhi",
    "South West Delhi",
    "West Delhi"
  ];
  
  const TrieNode = function (key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
    this.getWord = function () {
      let output = [];
      let node = this;
  
      while (node !== null) {
        output.unshift(node.key);
        node = node.parent;
      }
  
      return output.join("");
    };
  };
  
  const Trie = function () {
    this.root = new TrieNode(null);
    this.insert = function (word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
          node.children[word[i]] = new TrieNode(word[i]);
          node.children[word[i]].parent = node;
        }
        node = node.children[word[i]];
        if (i === word.length - 1) {
          node.end = true;
        }
      }
    };
  
    this.contains = function (word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
          node = node.children[word[i]];
        } else {
          return false;
        }
      }
      return node.end;
    };
  
    this.find = function (prefix) {
      let node = this.root;
      let output = [];
  
      for (let i = 0; i < prefix.length; i++) {
        if (node.children[prefix[i]]) {
          node = node.children[prefix[i]];
        } else {
          return output;
        }
      }
      findAllWords(node, output);
  
      return output;
    };
  
    const findAllWords = (node, arr) => {
      if (node.end) {
        arr.unshift(node.getWord());
      }
      for (let child in node.children) {
        findAllWords(node.children[child], arr);
      }
    };
  
    this.remove = function (word) {
      let root = this.root;
  
      if (!word) return;
      const removeWord = (node, word) => {
        if (node.end && node.getWord() === word) {
          let hasChildren = Object.keys(node.children).length > 0;
          if (hasChildren) {
            node.end = false;
          } else {
            node.parent.children = {};
          }
  
          return true;
        }
        for (let key in node.children) {
          removeWord(node.children[key], word);
        }
  
        return false;
      };
      removeWord(root, word);
    };
  };
  const iteams = new Trie();
  for (let i = 0; i < cities.length; i++) {
    iteams.insert(cities[i]);
  }
  
  export default iteams;
  
var abi = [
  {
    constant: false,
    inputs: [
      {
        name: "topicID",
        type: "uint256"
      }
    ],
    name: "vote",
    outputs: [
      {
        name: "voteID",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getMembersCount",
    outputs: [
      {
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "targetMember",
        type: "address"
      }
    ],
    name: "removeMember",
    outputs: [],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getName",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "topics",
    outputs: [
      {
        name: "proposer",
        type: "address"
      },
      {
        name: "description",
        type: "string"
      },
      {
        name: "numberOfVotes",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "memberId",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "members",
    outputs: [
      {
        name: "member",
        type: "address"
      },
      {
        name: "name",
        type: "string"
      },
      {
        name: "memberSince",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      },
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_extraData",
        type: "bytes"
      }
    ],
    name: "receiveApproval",
    outputs: [],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNumTopics",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "targetMember",
        type: "address"
      }
    ],
    name: "getMemberName",
    outputs: [
      {
        name: "name",
        type: "string"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "topicDescription",
        type: "string"
      }
    ],
    name: "newTopic",
    outputs: [
      {
        name: "topicID",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "targetMember",
        type: "address"
      },
      {
        name: "memberName",
        type: "string"
      }
    ],
    name: "addMember",
    outputs: [
      {
        name: "success",
        type: "bool"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "targetMember",
        type: "address"
      }
    ],
    name: "getMemberSince",
    outputs: [
      {
        name: "since",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "getTopicNameAndVotesAt",
    outputs: [
      {
        name: "topicName",
        type: "string"
      },
      {
        name: "topicVotes",
        type: "uint256"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getVoteCount",
    outputs: [
      {
        name: "votes",
        type: "uint256[]"
      }
    ],
    payable: false,
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    type: "function"
  },
  {
    inputs: [
      {
        name: "_name",
        type: "string"
      }
    ],
    payable: true,
    type: "constructor"
  },
  {
    payable: true,
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "topicID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "proposer",
        type: "address"
      },
      {
        indexed: false,
        name: "description",
        type: "string"
      }
    ],
    name: "TopicAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "topicID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "voter",
        type: "address"
      }
    ],
    name: "Voted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "member",
        type: "address"
      },
      {
        indexed: false,
        name: "isMember",
        type: "bool"
      }
    ],
    name: "MembershipChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "receivedEther",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_from",
        type: "address"
      },
      {
        indexed: false,
        name: "_value",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_token",
        type: "address"
      },
      {
        indexed: false,
        name: "_extraData",
        type: "bytes"
      }
    ],
    name: "receivedTokens",
    type: "event"
  }
];
var BYTECODE =
  "0x6060604052604051620019ce380380620019ce833981016040528051015b5b60008054600160a060020a03191633600160a060020a03161790555b80516200004f90600190602084019062000211565b5060408051602081019091526000808252620000799164010000000062000efc620000dd82021704565b5060005460408051808201909152600781527f666f756e646572000000000000000000000000000000000000000000000000006020820152620000d491600160a060020a03169064010000000062000efc620000dd82021704565b505b5062000409565b600160a060020a0382166000908152600460205260408120548190156200010857600091506200020a565b60058054600160a060020a03861660009081526004602052604090208190559062000137906001830162000297565b905060606040519081016040528085600160a060020a03168152602001848152602001428152506005828154811015156200016e57fe5b906000526020600020906003020160005b5081518154600160a060020a031916600160a060020a039091161781556020808301518051620001b6926001850192019062000211565b506040918201516002909101558051600160a060020a03861681526001602082015281517f27b022af4a8347100c7a041ce5ccf8e14d644ff05de696315196faae8cd50c9b929181900390910190a1600191505b5092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025457805160ff191683800117855562000284565b8280016001018555821562000284579182015b828111156200028457825182559160200191906001019062000267565b5b506200029392915062000352565b5090565b815481835581811511620002c657600302816003028360005260206000209182019101620002c6919062000376565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025457805160ff191683800117855562000284565b8280016001018555821562000284579182015b828111156200028457825182559160200191906001019062000267565b5b506200029392915062000352565b5090565b6200037391905b8082111562000293576000815560010162000359565b5090565b90565b6200037391905b8082111562000293578054600160a060020a03191681556000620003a56001830182620003bd565b50600060028201556003016200037d565b5090565b90565b50805460018160011615610100020316600290046000825580601f10620003e5575062000405565b601f01602090049060005260206000209081019062000405919062000352565b5b50565b6115b580620004196000396000f300606060405236156100ee5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630121b93f811461013a57806309772f8f1461015f5780630b1ca49a1461018157806317d7de7c1461019f57806318d9adab1461022f57806339106821146102e25780635daf08ca146103105780638da5cb5b146103c35780638f4ffcb1146103ef578063afbde5c91461045d578063aff4b8491461047f578063bbced0d01461051b578063c127c24714610583578063c1a2babc146105f7578063d417f18d14610625578063e7b3387c146106c4578063f2fde38b1461072f575b6101385b60408051600160a060020a033316815234602082015281517fa398b89ba344a0b23a0b9de53db298b2a1a868b396c1878b7e9dcbafecd49b13929181900390910190a15b565b005b341561014257fe5b61014d60043561074d565b60408051918252519081900360200190f35b341561016757fe5b61014d610843565b60408051918252519081900360200190f35b341561018957fe5b610138600160a060020a0360043516610869565b005b34156101a757fe5b6101af6109ea565b6040805160208082528351818301528351919283929083019185019080838382156101f5575b8051825260208311156101f557601f1990920191602091820191016101d5565b505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561023757fe5b610242600435610a82565b60408051600160a060020a0385168152908101829052606060208201818152845460026000196101006001841615020190911604918301829052906080830190859080156102d15780601f106102a6576101008083540402835291602001916102d1565b820191906000526020600020905b8154815290600101906020018083116102b457829003601f168201915b505094505050505060405180910390f35b34156102ea57fe5b61014d600160a060020a0360043516610abf565b60408051918252519081900360200190f35b341561031857fe5b610242600435610ad1565b60408051600160a060020a0385168152908101829052606060208201818152845460026000196101006001841615020190911604918301829052906080830190859080156102d15780601f106102a6576101008083540402835291602001916102d1565b820191906000526020600020905b8154815290600101906020018083116102b457829003601f168201915b505094505050505060405180910390f35b34156103cb57fe5b6103d3610b0e565b60408051600160a060020a039092168252519081900360200190f35b34156103f757fe5b604080516020600460643581810135601f8101849004840285018401909552848452610138948235600160a060020a0390811695602480359660443590931695946084949293910191908190840183828082843750949650610b1d95505050505050565b005b341561046557fe5b61014d610ca3565b60408051918252519081900360200190f35b341561048757fe5b6101af600160a060020a0360043516610caa565b6040805160208082528351818301528351919283929083019185019080838382156101f5575b8051825260208311156101f557601f1990920191602091820191016101d5565b505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561052357fe5b61014d600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650610d8d95505050505050565b60408051918252519081900360200190f35b341561058b57fe5b60408051602060046024803582810135601f81018590048502860185019096528585526105e3958335600160a060020a03169593946044949392909201918190840183828082843750949650610efc95505050505050565b604080519115158252519081900360200190f35b34156105ff57fe5b61014d600160a060020a0360043516611029565b60408051918252519081900360200190f35b341561062d57fe5b61063860043561107c565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360008314610689575b80518252602083111561068957601f199092019160209182019101610669565b505050905090810190601f1680156106b55780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34156106cc57fe5b6106d461116a565b604080516020808252835181830152835191928392908301918581019102808383821561071c575b80518252602083111561071c57601f1990920191602091820191016106fc565b5050509050019250505060405180910390f35b341561073757fe5b610138600160a060020a03600435166111e8565b005b600160a060020a033316600090815260046020526040812054819015156107745760006000fd5b600280548490811061078257fe5b906000526020600020906005020160005b50600160a060020a033316600090815260048201602052604090205490915060ff161515600114156107c55760006000fd5b600160a060020a0333166000818152600483016020908152604091829020805460ff19166001908117909155600285018054909101905581518681529081019290925280517f030b0f8dcd86a031eddb071f91882edeac8173663ba775713b677b42b51be44b9281900390910190a1806002015491505b5b50919050565b6000805433600160a060020a039081169116146108605760006000fd5b506005545b5b90565b6000805433600160a060020a039081169116146108865760006000fd5b600160a060020a03821660009081526004602052604090205415156108ab5760006000fd5b50600160a060020a0381166000908152600460205260409020545b6005546000190181101561096e5760058054600183019081106108e557fe5b906000526020600020906003020160005b50600580548390811061090557fe5b906000526020600020906003020160005b5081548154600160a060020a031916600160a060020a039091161781556001808301805461095b92848101929160026000199282161561010002929092011604611224565b506002918201549101555b6001016108c6565b600160a060020a03821660009081526004602052604081205560058054600019810190811061099957fe5b906000526020600020906003020160005b8154600160a060020a03191682556109c66001830160006112aa565b5060006002919091015560058054906109e39060001983016112f2565b505b5b5050565b6109f2611324565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610a775780601f10610a4c57610100808354040283529160200191610a77565b820191906000526020600020905b815481529060010190602001808311610a5a57829003601f168201915b505050505090505b90565b6002805482908110610a9057fe5b906000526020600020906005020160005b5080546002820154600160a060020a03909116925060019091019083565b60046020526000908152604090205481565b6005805482908110610adf57fe5b906000526020600020906003020160005b5080546002820154600160a060020a03909116925060019091019083565b600054600160a060020a031681565b604080516000602091820181905282517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a038881166004830152308116602483015260448201889052935186948516936323b872dd936064808501949293928390030190829087803b1515610b9757fe5b6102c65a03f11515610ba557fe5b50506040515115159050610bb95760006000fd5b7f0eeb71b8926d7ed8f47a2cedf6b9b204e2001344c7fa20c696c9f06ea7c413c6858585856040518085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a0316815260200180602001828103825283818151815260200191508051906020019080838360008314610c5f575b805182526020831115610c5f57601f199092019160209182019101610c3f565b505050905090810190601f168015610c8b5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15b5050505050565b6003545b90565b610cb2611324565b600160a060020a038216600090815260046020526040902054801515610cd85760006000fd5b6005805482908110610ce657fe5b906000526020600020906003020160005b5060019081018054604080516020600295841615610100026000190190931694909404601f810183900483028501830190915280845290830182828015610d7f5780601f10610d5457610100808354040283529160200191610d7f565b820191906000526020600020905b815481529060010190602001808311610d6257829003601f168201915b505050505091505b50919050565b600160a060020a03331660009081526004602052604081205481901515610db45760006000fd5b6002805490610dc69060018301611336565b9150600282815481101515610dd757fe5b906000526020600020906005020160005b508054600160a060020a03191633600160a060020a03161781558351909150610e1a9060018301906020860190611368565b50600081600201819055507f2521e8a82adf2987afd19870e41d38792d97c3d927e9b3be877ada07a9fc4c318233856040518084815260200183600160a060020a0316600160a060020a0316815260200180602001828103825283818151815260200191508051906020019080838360008314610eb2575b805182526020831115610eb257601f199092019160209182019101610e92565b505050905090810190601f168015610ede5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1600182016003555b5b50919050565b600160a060020a038216600090815260046020526040812054819015610f255760009150611022565b60058054600160a060020a038616600090815260046020526040902081905590610f5290600183016112f2565b905060606040519081016040528085600160a060020a0316815260200184815260200142815250600582815481101515610f8857fe5b906000526020600020906003020160005b5081518154600160a060020a031916600160a060020a039091161781556020808301518051610fce9260018501920190611368565b506040918201516002909101558051600160a060020a03861681526001602082015281517f27b022af4a8347100c7a041ce5ccf8e14d644ff05de696315196faae8cd50c9b929181900390910190a1600191505b5092915050565b600160a060020a03811660009081526004602052604081205480151561104f5760006000fd5b600580548290811061105d57fe5b906000526020600020906003020160005b506002015491505b50919050565b611084611324565b600254600090819084106110985760006000fd5b60028054859081106110a657fe5b906000526020600020906005020160005b509050806001018160020154818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111585780601f1061112d57610100808354040283529160200191611158565b820191906000526020600020905b81548152906001019060200180831161113b57829003601f168201915b50505050509150925092505b50915091565b611172611324565b6000805433600160a060020a0390811691161461118f5760006000fd5b5060005b6002548110156111e25760028054829081106111ab57fe5b906000526020600020906005020160005b506002015482828151811015156111cf57fe5b602090810290910101525b600101611193565b5b5b5090565b60005433600160a060020a039081169116146112045760006000fd5b60008054600160a060020a031916600160a060020a0383161790555b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061125d5780548555611299565b8280016001018555821561129957600052602060002091601f016020900482015b8281111561129957825482559160010191906001019061127e565b5b506111e2929150611478565b5090565b50805460018160011615610100020316600290046000825580601f106112d05750611220565b601f0160209004906000526020600020908101906112209190611478565b5b50565b8154818355818115116109e3576003028160030283600052602060002091820191016109e39190611499565b5b505050565b60408051602081019091526000815290565b8154818355818115116109e3576005028160050283600052602060002091820191016109e391906114db565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113a957805160ff1916838001178555611299565b82800160010185558215611299579182015b828111156112995782518255916020019190600101906113bb565b5b506111e2929150611478565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113a957805160ff1916838001178555611299565b82800160010185558215611299579182015b828111156112995782518255916020019190600101906113bb565b5b506111e2929150611478565b5090565b60408051602081019091526000815290565b61086591905b808211156111e2576000815560010161147e565b5090565b90565b61086591905b808211156111e2578054600160a060020a031916815560006114c460018301826112aa565b506000600282015560030161149f565b5090565b90565b61086591905b808211156111e2578054600160a060020a0319168155600061150660018301826112aa565b600282016000905560038201600061151e919061152e565b506005016114e1565b5090565b90565b50805460008255906000526020600020908101906112209190611550565b5b50565b61086591905b808211156111e257805474ffffffffffffffffffffffffffffffffffffffffff19168155600101611556565b5090565b905600a165627a7a7230582005f834f03e233b650246f5436d062896e5ee7f2a18532995b6a1be11ec938c01002900000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000006556e436f6e660000000000000000000000000000000000000000000000000000";
var MyContract = web3.eth.contract(abi);

/*
 Greet the user with some lovely messages
*/
status.addListener("init", function(params, context) {
  status.sendMessage(
    "Hi - Unconf let's you create or participate in Unconferences!"
  );
  status.sendMessage(
    "Let's get started, try typing /createUnconf to create a new unconference"
  );
});

/*
 Find/Join/Share Event
 */
status.command({
  name: "createUnconf",
  title: "Create a new unconference",
  description: "Helps you create a new unconference",
  color: "#0000ff",
  params: [
    {
      name: "unconfName",
      type: status.types.TEXT,
      placeholder: "Unconference Name"
    }
  ],
  handler: function(params) {
    //Create Event and store address in local storage
    status.sendMessage(
      "Please wait while we set up your Unconference, this may take a second."
    );
    deployContract(params.unconfName);
    status.sendMessage("Success *" + params.unconfName + "* created!");
    status.sendMessage(
      "You can share *" +
        params.unconfName +
        "* with your attendies by sending them the below address"
    );
    //Send the address in a seperate message for ease of copy/pasting
    status.sendMessage(getUnconfAddress());
  }
});

status.command({
  name: "!register",
  title: "Register for an unconference",
  description: "Helps register for an unconference",
  color: "#0000ff",
  sequentialParams: true,
  params: [
    {
      name: "unconfAddress",
      type: status.types.TEXT,
      placeholder: "Unconference Address"
    },
    {
      name: "alias",
      type: status.types.TEXT,
      placeholder: "Alias"
    }
  ],
  handler: function(params) {
    //Get Event Name and store address in local storage
    var eventName = getUnconfNameFromChain(params.unconfAddress);

    //TODO: make sure we get a result from the contract otherwise show an error
    //TODO: Merge with addMember
    setEventName(eventName);
    setEventAddress(params.unconfAddress);

    addMemberToChain(params.alias);
  },
  validator: function(params, context) {
    if (!web3.isAddress(params.unconfAddress)) {
      return {
        markup: status.components.validationMessage("Invalid contract address")
      };
    }
  }
});

status.command({
  name: "shareUnconf",
  title: "Share this unconference",
  description: "Helps share an unconference",
  color: "#0000ff",
  preview: function(params) {
    var text = status.components.text({}, "");
    return {
      markup: status.components.view({}, [text])
    };
  },
  handler: function(params) {
    //Get Event Name and address from local storage
    var unconfName = getUnconfName();
    var unconfAddress = getUnconfAddress();

    status.sendMessage(
      "You can share *" +
        params.unconfName +
        "* with your attendies by sending them the below address"
    );
    //Send the address in a seperate message for ease of copy/pasting
    status.sendMessage(getUnconfAddress());
  }
});

/*
 Once the user has selected an event here are the topic options
 */
status.command({
  name: "addTopic",
  title: "Topic Creator",
  description: "Helps you create a new topic",
  color: "#0000ff",
  params: [
    {
      name: "topicName",
      type: status.types.TEXT,
      placeholder: "Topic Name"
    }
  ],
  handler: function(params) {
    addTopicToChain(params.topicName);
  }
});

status.command({
  name: "listTopics",
  title: "Topic Lister",
  description: "Lists all added topic",
  color: "#0000ff",
  handler: function(params) {
    getAlltopics();
  }
});

status.command({
  name: "voteForTopic",
  title: "Topic Voter",
  description: "Helps you vote on an exisitng topic",
  color: "#0000ff",
  params: [
    {
      name: "topicID",
      type: status.types.NUMBER,
      placeholder: "Topic ID"
    }
  ],
  handler: function(params) {
    voteForTopicOnChain(params.topicID);
  }
});

/*
 General functions
*/
function deployContract(eventName) {
  var event = MyContract.new(eventName, {
    from: getUsersAddress(),
    data: BYTECODE
  });

  var receipt = waitForMining(event.transactionHash);

  //Store these details for later
  setEventAddress(receipt.contractAddress);
  setEventName(eventName);
}

function getAlltopics() {
  var usersAddress = getUsersAddress();

  var contractAddress = getUnconfAddress();

  // initiate contract for an address
  var myContractInstance = MyContract.at(contractAddress);

  // call constant function
  myContractInstance.getNumTopics(function(error, result) {
    var numTopics = result;

    if (numTopics == 0) {
      status.sendMessage("No topics added yet");
      return;
    }

    status.sendMessage("numTopics " + numTopics);

    var message = "";
    var count;
    for (count = 0; count < numTopics; count++) {
      // call constant function
      myContractInstance.getTopicNameAndVotesAt(count, function(error, result) {
        message +=
          "ID:" + count + "  Topic:" + result[0] + " Votes:" + result[1] + "\n";
      });
    }

    status.sendMessage(message);
  });
}

function getUnconfNameFromChain(contractAddress) {
  var usersAddress = getUsersAddress();

  var contractAddress = getUnconfAddress();

  // initiate contract for an address
  var myContractInstance = MyContract.at(contractAddress);

  myContractInstance.getName(function(error, result) {
    return result;
  });
}

function addTopicToChain(topicName) {
  var usersAddress = getUsersAddress();

  var contractAddress = getUnconfAddress();

  // initiate contract for an address
  var myContractInstance = MyContract.at(contractAddress);

  myContractInstance.getNumTopics(function(error, result) {
    status.sendMessage("Number of topics: " + result);
  });

  var memberId = myContractInstance.memberId.call(usersAddress);
  status.sendMessage("MemberId: " + memberId);

  // call constant function
  var hash = myContractInstance.newTopic(topicName, { from: usersAddress }); //, function(error, hash) {

  status.sendMessage("Please wait we're creating your topic now!");

  var receipt = waitForMining(hash);
  if (receipt.failed) {
    status.sendMessage(
      "Oh no something didn't quite work as it should've, please try again!"
    );
    return;
  }

  status.sendMessage("receipt: " + JSON.stringify(receipt));

  status.sendMessage("Success! Topic: " + topicName + " created!");

  myContractInstance.getNumTopics(function(error, result) {
    status.sendMessage("Number of topics: " + result);
  });
  //});
}

function voteForTopicOnChain(topicID) {
  var usersAddress = getUsersAddress();

  var contractAddress = getUnconfAddress();

  // initiate contract for an address
  var myContractInstance = MyContract.at(contractAddress);

  // call constant function
  myContractInstance.vote(
    topicID,
    {
      from: usersAddress
    },
    function(error, hash) {
      status.sendMessage("Please wait a second while we confirm your vote");

      var receipt = waitForMining(hash);

      status.sendMessage("Success! vote confirmed!");
    }
  );
}

function addMemberToChain(memberName) {
  var usersAddress = getUsersAddress();
  var unconfName = getUnconfName();
  var contractAddress = getUnconfAddress();

  // initiate contract for an address
  var myContractInstance = MyContract.at(contractAddress);

  // call constant function
  myContractInstance.addMember(
    usersAddress,
    memberName,
    {
      from: usersAddress
    },
    function(error, hash) {
      var receipt = waitForMining(hash);

      myContractInstance.getMemberName(usersAddress, function(error, result) {
        if (result != memberName) {
          status.sendMessage(
            "Looks like you were already registered for " +
              unconfName +
              " as: " +
              result
          );
        } else {
          status.sendMessage(
            "Successfully registered for " + unconfName + " as: " + result
          );
        }
      });
    }
  );
}

//Thanks https://github.com/morelazers
function waitForMining(txHash) {
  var mined = false;
  var receipt;
  while (!mined) {
    receipt = web3.eth.getTransactionReceipt(txHash);
    if (!receipt) continue;
    if (receipt.contractAddress || receipt.gasUsed) mined = true;
  }
  return receipt;
}

/*
  Local Storage getters
*/
function hasUserRegistered() {
  return localStorage.getItem("user_registered");
}

function getUsersAlias() {
  return localStorage.getItem("users_alias");
}

function getUnconfName() {
  return localStorage.getItem("event_name");
}

function getUnconfAddress() {
  return localStorage.getItem("event_address");
}

/*
 Local Storage setters
*/
function setUserRegistered(registered) {
  return localStorage.setItem("user_registered", registered);
}

function setUsersAlias(alias) {
  return localStorage.setItem("users_alias", alias);
}

function setEventName(eventName) {
  return localStorage.setItem("event_name", eventName);
}

function setEventAddress(eventAddress) {
  return localStorage.setItem("event_address", eventAddress);
}

/*
 Convience getter
*/
function getUsersAddress() {
  return web3.eth.accounts[0];
}

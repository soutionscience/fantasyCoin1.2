(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/Competitions.json":
/*!*******************************************!*\
  !*** ./build/contracts/Competitions.json ***!
  \*******************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"Competitions","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxPlayers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"complete","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"prizeMoney","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"winners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"maximumPlayers","type":"uint256"},{"name":"compeName","type":"string"},{"name":"prize","type":"uint256"},{"name":"creator","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"constant":false,"inputs":[],"name":"joinCompetition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"winner","type":"address"}],"name":"awardWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"winner\",\"type\":\"address\"}],\"name\":\"awardWinner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"maxPlayers\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"complete\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"prizeMoney\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"winners\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"joinCompetition\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"players\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"maximumPlayers\",\"type\":\"uint256\"},{\"name\":\"compeName\",\"type\":\"string\"},{\"name\":\"prize\",\"type\":\"uint256\"},{\"name\":\"creator\",\"type\":\"address\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol\":\"Competitions\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol\":{\"keccak256\":\"0xbf3b2a8dc3a051bd208f0f6a5c5e6eadeeb5ebfb96ef359393b94dfc2357ef48\",\"urls\":[\"bzzr://9949f2fe30e9833f0c155b004b164da594e1c6da57446cde939c57f61ccbd364\"]}},\"version\":1}","bytecode":"0x60806040526040516108483803806108488339810180604052608081101561002657600080fd5b8101908080519060200190929190805164010000000081111561004857600080fd5b8281019050602081018481111561005e57600080fd5b815185600182028301116401000000008211171561007b57600080fd5b50509291906020018051906020019092919080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836002819055508160038190555082600490805190602001906100fe929190610123565b506000600760006101000a81548160ff021916908315150217905550505050506101c8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b6101c591905b808211156101c15760008160009055506001016101a9565b5090565b90565b610671806101d76000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063522e117711610066578063522e1177146101c757806365213840146101e9578063a2fb117514610207578063e80380a414610275578063f71d96cb1461027f57610093565b806306fdde0314610098578063409ca41f1461011b578063481c6a751461015f5780634c2412a2146101a9575b600080fd5b6100a06102ed565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015d6004803603602081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061038b565b005b610167610458565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101b161047d565b6040518082815260200191505060405180910390f35b6101cf610483565b604051808215151515815260200191505060405180910390f35b6101f1610496565b6040518082815260200191505060405180910390f35b6102336004803603602081101561021d57600080fd5b810190808035906020019092919050505061049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027d6104d8565b005b6102ab6004803603602081101561029557600080fd5b8101908080359060200190929190505050610609565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e457600080fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661043a57600080fd5b6001600760006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600760009054906101000a900460ff1681565b60035481565b600581815481106104a957fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561052f57600080fd5b600760009054906101000a900460ff161561054957600080fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6001818154811061061657fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820f393bb3d8853da3b4afba2ae77bd94feb73f42ebc7903bc7ccfe39b6ada827c70029","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063522e117711610066578063522e1177146101c757806365213840146101e9578063a2fb117514610207578063e80380a414610275578063f71d96cb1461027f57610093565b806306fdde0314610098578063409ca41f1461011b578063481c6a751461015f5780634c2412a2146101a9575b600080fd5b6100a06102ed565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015d6004803603602081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061038b565b005b610167610458565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101b161047d565b6040518082815260200191505060405180910390f35b6101cf610483565b604051808215151515815260200191505060405180910390f35b6101f1610496565b6040518082815260200191505060405180910390f35b6102336004803603602081101561021d57600080fd5b810190808035906020019092919050505061049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027d6104d8565b005b6102ab6004803603602081101561029557600080fd5b8101908080359060200190929190505050610609565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e457600080fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661043a57600080fd5b6001600760006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600760009054906101000a900460ff1681565b60035481565b600581815481106104a957fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561052f57600080fd5b600760009054906101000a900460ff161561054957600080fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6001818154811061061657fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820f393bb3d8853da3b4afba2ae77bd94feb73f42ebc7903bc7ccfe39b6ada827c70029","sourceMap":"27:1036:0:-;;;389:263;;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;389:263:0;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;0:372;;389:263:0;;;;;;;;;;;;;;;;;;;;;;;;;;518:7;508;;:17;;;;;;;;;;;;;;;;;;549:14;536:10;:27;;;;587:5;574:10;:18;;;;609:9;603:4;:15;;;;;;;;;;;;:::i;:::-;;639:5;629:8;;:15;;;;;;;;;;;;;;;;;;389:263;;;;27:1036;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"27:1036:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:1036:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;174:19;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;174:19:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;850:204;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;850:204:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;55:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;116;;;:::i;:::-;;;;;;;;;;;;;;;;;;;273:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;145:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;200:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;200:25:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;658:186;;;:::i;:::-;;84:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;84:25:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;174:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;850:204::-;355:7;;;;;;;;;;;341:21;;:10;:21;;;333:30;;;;;;931:10;:18;942:6;931:18;;;;;;;;;;;;;;;;;;;;;;;;;923:27;;;;;;1032:4;1022:8;;:14;;;;;;;;;;;;;;;;;;850:204;:::o;55:22::-;;;;;;;;;;;;;:::o;116:::-;;;;:::o;273:20::-;;;;;;;;;;;;;:::o;145:22::-;;;;:::o;200:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;658:186::-;710:10;:22;721:10;710:22;;;;;;;;;;;;;;;;;;;;;;;;;709:23;701:32;;;;;;753:8;;;;;;;;;;;752:9;744:18;;;;;;797:4;773:10;:22;784:10;773:22;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;812:7;825:10;812:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;812:24:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;658:186::o;84:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.5.0;\r\n\r\ncontract Competitions{\r\n    address public manager;\r\n    address [] public players;\r\n    uint public maxPlayers;\r\n    uint public prizeMoney;\r\n    string  public name;\r\n    address [] public winners;\r\n    mapping(address=> bool) competitor;\r\n    bool public complete;\r\n     modifier restricted(){\r\n        require(msg.sender == manager);\r\n        _;\r\n    }\r\n    constructor (uint maximumPlayers,\r\n    string memory compeName, uint prize, address creator) public payable {\r\n        manager = creator;\r\n        maxPlayers = maximumPlayers;\r\n        prizeMoney = prize;\r\n        name =compeName;\r\n        complete= false;\r\n    }\r\n    function joinCompetition()public{\r\n        require(!competitor[msg.sender]);\r\n        require(!complete);\r\n        competitor[msg.sender]= true;\r\n        players.push(msg.sender);\r\n    }\r\n    function awardWinner(address payable winner) public restricted{\r\n        require(competitor[winner]);\r\n        \r\n        //winner.transfer(address(this).balance);\r\n        complete= true;\r\n        \r\n    }\r\n    \r\n}","sourcePath":"C:\\Users\\Solut\\Google Drive\\work2\\projects\\fantasyCoin1.2\\contracts\\Competitions.sol","ast":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol","exportedSymbols":{"Competitions":[114]},"id":115,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":114,"linearizedBaseContracts":[114],"name":"Competitions","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":3,"name":"manager","nodeType":"VariableDeclaration","scope":114,"src":"55:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"55:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":6,"name":"players","nodeType":"VariableDeclaration","scope":114,"src":"84:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":4,"name":"address","nodeType":"ElementaryTypeName","src":"84:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":5,"length":null,"nodeType":"ArrayTypeName","src":"84:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":8,"name":"maxPlayers","nodeType":"VariableDeclaration","scope":114,"src":"116:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7,"name":"uint","nodeType":"ElementaryTypeName","src":"116:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":10,"name":"prizeMoney","nodeType":"VariableDeclaration","scope":114,"src":"145:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":9,"name":"uint","nodeType":"ElementaryTypeName","src":"145:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":12,"name":"name","nodeType":"VariableDeclaration","scope":114,"src":"174:19:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":11,"name":"string","nodeType":"ElementaryTypeName","src":"174:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":15,"name":"winners","nodeType":"VariableDeclaration","scope":114,"src":"200:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":13,"name":"address","nodeType":"ElementaryTypeName","src":"200:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":14,"length":null,"nodeType":"ArrayTypeName","src":"200:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":19,"name":"competitor","nodeType":"VariableDeclaration","scope":114,"src":"232:34:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":18,"keyType":{"id":16,"name":"address","nodeType":"ElementaryTypeName","src":"240:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"232:23:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":17,"name":"bool","nodeType":"ElementaryTypeName","src":"250:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"internal"},{"constant":false,"id":21,"name":"complete","nodeType":"VariableDeclaration","scope":114,"src":"273:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":20,"name":"bool","nodeType":"ElementaryTypeName","src":"273:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"public"},{"body":{"id":31,"nodeType":"Block","src":"322:61:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":27,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":24,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"341:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":25,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"341:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":26,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"355:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"341:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":23,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"333:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":28,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"333:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":29,"nodeType":"ExpressionStatement","src":"333:30:0"},{"id":30,"nodeType":"PlaceholderStatement","src":"374:1:0"}]},"documentation":null,"id":32,"name":"restricted","nodeType":"ModifierDefinition","parameters":{"id":22,"nodeType":"ParameterList","parameters":[],"src":"320:2:0"},"src":"301:82:0","visibility":"internal"},{"body":{"id":63,"nodeType":"Block","src":"497:155:0","statements":[{"expression":{"argumentTypes":null,"id":45,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":43,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"508:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":44,"name":"creator","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"518:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"508:17:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":46,"nodeType":"ExpressionStatement","src":"508:17:0"},{"expression":{"argumentTypes":null,"id":49,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":47,"name":"maxPlayers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":8,"src":"536:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":48,"name":"maximumPlayers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":34,"src":"549:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"536:27:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":50,"nodeType":"ExpressionStatement","src":"536:27:0"},{"expression":{"argumentTypes":null,"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":51,"name":"prizeMoney","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":10,"src":"574:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":52,"name":"prize","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":38,"src":"587:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"574:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":54,"nodeType":"ExpressionStatement","src":"574:18:0"},{"expression":{"argumentTypes":null,"id":57,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":55,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"603:4:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":56,"name":"compeName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":36,"src":"609:9:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"603:15:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":58,"nodeType":"ExpressionStatement","src":"603:15:0"},{"expression":{"argumentTypes":null,"id":61,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":59,"name":"complete","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"629:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"66616c7365","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"639:5:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"src":"629:15:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":62,"nodeType":"ExpressionStatement","src":"629:15:0"}]},"documentation":null,"id":64,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":41,"nodeType":"ParameterList","parameters":[{"constant":false,"id":34,"name":"maximumPlayers","nodeType":"VariableDeclaration","scope":64,"src":"402:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":33,"name":"uint","nodeType":"ElementaryTypeName","src":"402:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":36,"name":"compeName","nodeType":"VariableDeclaration","scope":64,"src":"428:23:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":35,"name":"string","nodeType":"ElementaryTypeName","src":"428:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":38,"name":"prize","nodeType":"VariableDeclaration","scope":64,"src":"453:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":37,"name":"uint","nodeType":"ElementaryTypeName","src":"453:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":40,"name":"creator","nodeType":"VariableDeclaration","scope":64,"src":"465:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":39,"name":"address","nodeType":"ElementaryTypeName","src":"465:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"401:80:0"},"returnParameters":{"id":42,"nodeType":"ParameterList","parameters":[],"src":"497:0:0"},"scope":114,"src":"389:263:0","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":94,"nodeType":"Block","src":"690:154:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"709:23:0","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":68,"name":"competitor","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"710:10:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":71,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":69,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"721:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"721:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"710:22:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":67,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"701:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":73,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"701:32:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":74,"nodeType":"ExpressionStatement","src":"701:32:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":77,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"752:9:0","subExpression":{"argumentTypes":null,"id":76,"name":"complete","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"753:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":75,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"744:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"744:18:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"ExpressionStatement","src":"744:18:0"},{"expression":{"argumentTypes":null,"id":85,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":80,"name":"competitor","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"773:10:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":83,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":81,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"784:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":82,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"784:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"773:22:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":84,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"797:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"773:28:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":86,"nodeType":"ExpressionStatement","src":"773:28:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":90,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"825:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"825:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"expression":{"argumentTypes":null,"id":87,"name":"players","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"812:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":89,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"812:12:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":92,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"812:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":93,"nodeType":"ExpressionStatement","src":"812:24:0"}]},"documentation":null,"id":95,"implemented":true,"kind":"function","modifiers":[],"name":"joinCompetition","nodeType":"FunctionDefinition","parameters":{"id":65,"nodeType":"ParameterList","parameters":[],"src":"682:2:0"},"returnParameters":{"id":66,"nodeType":"ParameterList","parameters":[],"src":"690:0:0"},"scope":114,"src":"658:186:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":112,"nodeType":"Block","src":"912:142:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":103,"name":"competitor","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"931:10:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":105,"indexExpression":{"argumentTypes":null,"id":104,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":97,"src":"942:6:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"931:18:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":102,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"923:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":106,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"923:27:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":107,"nodeType":"ExpressionStatement","src":"923:27:0"},{"expression":{"argumentTypes":null,"id":110,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":108,"name":"complete","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"1022:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":109,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1032:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1022:14:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":111,"nodeType":"ExpressionStatement","src":"1022:14:0"}]},"documentation":null,"id":113,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":100,"modifierName":{"argumentTypes":null,"id":99,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":32,"src":"902:10:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"902:10:0"}],"name":"awardWinner","nodeType":"FunctionDefinition","parameters":{"id":98,"nodeType":"ParameterList","parameters":[{"constant":false,"id":97,"name":"winner","nodeType":"VariableDeclaration","scope":113,"src":"871:22:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"typeName":{"id":96,"name":"address","nodeType":"ElementaryTypeName","src":"871:15:0","stateMutability":"payable","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"value":null,"visibility":"internal"}],"src":"870:24:0"},"returnParameters":{"id":101,"nodeType":"ParameterList","parameters":[],"src":"912:0:0"},"scope":114,"src":"850:204:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":115,"src":"27:1036:0"}],"src":"0:1063:0"},"legacyAST":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol","exportedSymbols":{"Competitions":[114]},"id":115,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":114,"linearizedBaseContracts":[114],"name":"Competitions","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":3,"name":"manager","nodeType":"VariableDeclaration","scope":114,"src":"55:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"55:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":6,"name":"players","nodeType":"VariableDeclaration","scope":114,"src":"84:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":4,"name":"address","nodeType":"ElementaryTypeName","src":"84:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":5,"length":null,"nodeType":"ArrayTypeName","src":"84:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":8,"name":"maxPlayers","nodeType":"VariableDeclaration","scope":114,"src":"116:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7,"name":"uint","nodeType":"ElementaryTypeName","src":"116:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":10,"name":"prizeMoney","nodeType":"VariableDeclaration","scope":114,"src":"145:22:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":9,"name":"uint","nodeType":"ElementaryTypeName","src":"145:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"constant":false,"id":12,"name":"name","nodeType":"VariableDeclaration","scope":114,"src":"174:19:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":11,"name":"string","nodeType":"ElementaryTypeName","src":"174:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":15,"name":"winners","nodeType":"VariableDeclaration","scope":114,"src":"200:25:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":13,"name":"address","nodeType":"ElementaryTypeName","src":"200:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":14,"length":null,"nodeType":"ArrayTypeName","src":"200:10:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":19,"name":"competitor","nodeType":"VariableDeclaration","scope":114,"src":"232:34:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":18,"keyType":{"id":16,"name":"address","nodeType":"ElementaryTypeName","src":"240:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"232:23:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":17,"name":"bool","nodeType":"ElementaryTypeName","src":"250:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"internal"},{"constant":false,"id":21,"name":"complete","nodeType":"VariableDeclaration","scope":114,"src":"273:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":20,"name":"bool","nodeType":"ElementaryTypeName","src":"273:4:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"public"},{"body":{"id":31,"nodeType":"Block","src":"322:61:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":27,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":24,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"341:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":25,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"341:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":26,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"355:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"341:21:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":23,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"333:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":28,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"333:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":29,"nodeType":"ExpressionStatement","src":"333:30:0"},{"id":30,"nodeType":"PlaceholderStatement","src":"374:1:0"}]},"documentation":null,"id":32,"name":"restricted","nodeType":"ModifierDefinition","parameters":{"id":22,"nodeType":"ParameterList","parameters":[],"src":"320:2:0"},"src":"301:82:0","visibility":"internal"},{"body":{"id":63,"nodeType":"Block","src":"497:155:0","statements":[{"expression":{"argumentTypes":null,"id":45,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":43,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"508:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":44,"name":"creator","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"518:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"508:17:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":46,"nodeType":"ExpressionStatement","src":"508:17:0"},{"expression":{"argumentTypes":null,"id":49,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":47,"name":"maxPlayers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":8,"src":"536:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":48,"name":"maximumPlayers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":34,"src":"549:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"536:27:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":50,"nodeType":"ExpressionStatement","src":"536:27:0"},{"expression":{"argumentTypes":null,"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":51,"name":"prizeMoney","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":10,"src":"574:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":52,"name":"prize","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":38,"src":"587:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"574:18:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":54,"nodeType":"ExpressionStatement","src":"574:18:0"},{"expression":{"argumentTypes":null,"id":57,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":55,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":12,"src":"603:4:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":56,"name":"compeName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":36,"src":"609:9:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"603:15:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":58,"nodeType":"ExpressionStatement","src":"603:15:0"},{"expression":{"argumentTypes":null,"id":61,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":59,"name":"complete","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"629:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"66616c7365","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"639:5:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"src":"629:15:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":62,"nodeType":"ExpressionStatement","src":"629:15:0"}]},"documentation":null,"id":64,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":41,"nodeType":"ParameterList","parameters":[{"constant":false,"id":34,"name":"maximumPlayers","nodeType":"VariableDeclaration","scope":64,"src":"402:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":33,"name":"uint","nodeType":"ElementaryTypeName","src":"402:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":36,"name":"compeName","nodeType":"VariableDeclaration","scope":64,"src":"428:23:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":35,"name":"string","nodeType":"ElementaryTypeName","src":"428:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":38,"name":"prize","nodeType":"VariableDeclaration","scope":64,"src":"453:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":37,"name":"uint","nodeType":"ElementaryTypeName","src":"453:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":40,"name":"creator","nodeType":"VariableDeclaration","scope":64,"src":"465:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":39,"name":"address","nodeType":"ElementaryTypeName","src":"465:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"401:80:0"},"returnParameters":{"id":42,"nodeType":"ParameterList","parameters":[],"src":"497:0:0"},"scope":114,"src":"389:263:0","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":94,"nodeType":"Block","src":"690:154:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"709:23:0","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":68,"name":"competitor","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"710:10:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":71,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":69,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"721:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"721:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"710:22:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":67,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"701:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":73,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"701:32:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":74,"nodeType":"ExpressionStatement","src":"701:32:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":77,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"752:9:0","subExpression":{"argumentTypes":null,"id":76,"name":"complete","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"753:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":75,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"744:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"744:18:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"ExpressionStatement","src":"744:18:0"},{"expression":{"argumentTypes":null,"id":85,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":80,"name":"competitor","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"773:10:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":83,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":81,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"784:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":82,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"784:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"773:22:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":84,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"797:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"773:28:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":86,"nodeType":"ExpressionStatement","src":"773:28:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":90,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"825:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"825:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"expression":{"argumentTypes":null,"id":87,"name":"players","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6,"src":"812:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":89,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"812:12:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":92,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"812:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":93,"nodeType":"ExpressionStatement","src":"812:24:0"}]},"documentation":null,"id":95,"implemented":true,"kind":"function","modifiers":[],"name":"joinCompetition","nodeType":"FunctionDefinition","parameters":{"id":65,"nodeType":"ParameterList","parameters":[],"src":"682:2:0"},"returnParameters":{"id":66,"nodeType":"ParameterList","parameters":[],"src":"690:0:0"},"scope":114,"src":"658:186:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":112,"nodeType":"Block","src":"912:142:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":103,"name":"competitor","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"931:10:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":105,"indexExpression":{"argumentTypes":null,"id":104,"name":"winner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":97,"src":"942:6:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"931:18:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":102,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"923:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":106,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"923:27:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":107,"nodeType":"ExpressionStatement","src":"923:27:0"},{"expression":{"argumentTypes":null,"id":110,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":108,"name":"complete","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"1022:8:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":109,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1032:4:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1022:14:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":111,"nodeType":"ExpressionStatement","src":"1022:14:0"}]},"documentation":null,"id":113,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":100,"modifierName":{"argumentTypes":null,"id":99,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":32,"src":"902:10:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"902:10:0"}],"name":"awardWinner","nodeType":"FunctionDefinition","parameters":{"id":98,"nodeType":"ParameterList","parameters":[{"constant":false,"id":97,"name":"winner","nodeType":"VariableDeclaration","scope":113,"src":"871:22:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"},"typeName":{"id":96,"name":"address","nodeType":"ElementaryTypeName","src":"871:15:0","stateMutability":"payable","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"value":null,"visibility":"internal"}],"src":"870:24:0"},"returnParameters":{"id":101,"nodeType":"ParameterList","parameters":[],"src":"912:0:0"},"scope":114,"src":"850:204:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":115,"src":"27:1036:0"}],"src":"0:1063:0"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.11","updatedAt":"2019-06-26T21:23:29.402Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./build/contracts/League.json":
/*!*************************************!*\
  !*** ./build/contracts/League.json ***!
  \*************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"League","abi":[{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedCompetitions","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"creator","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"maximumPlayers","type":"uint256"},{"name":"compeName","type":"string"}],"name":"deployCompetition","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCompetitions","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCompetitionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllCompetitions","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"getAllCompetitions\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"manager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"maximumPlayers\",\"type\":\"uint256\"},{\"name\":\"compeName\",\"type\":\"string\"}],\"name\":\"deployCompetition\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedCompetitions\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCompetitions\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCompetitionCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"creator\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol\":\"League\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol\":{\"keccak256\":\"0xbf3b2a8dc3a051bd208f0f6a5c5e6eadeeb5ebfb96ef359393b94dfc2357ef48\",\"urls\":[\"bzzr://9949f2fe30e9833f0c155b004b164da594e1c6da57446cde939c57f61ccbd364\"]},\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol\":{\"keccak256\":\"0xf1713a5832a3b5615151848b634e5474f4e58785ddc534fe436356dc96c8b8af\",\"urls\":[\"bzzr://61ea433132315d19a94af3198f2c1825fe67687575e1ccf3159492caf9758460\"]}},\"version\":1}","bytecode":"0x608060405234801561001057600080fd5b50604051602080610ef68339810180604052602081101561003057600080fd5b810190808051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610e64806100926000396000f3fe6080604052600436106100555760003560e01c80631fe127cd1461005a578063481c6a75146100c6578063687a5e7b1461011d5780636ee44031146101e25780639f6c0ce31461025d578063eb1fa9fa146102c9575b600080fd5b34801561006657600080fd5b5061006f6102f4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100b2578082015181840152602081019050610097565b505050509050019250505060405180910390f35b3480156100d257600080fd5b506100db610382565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e06004803603604081101561013357600080fd5b81019080803590602001909291908035906020019064010000000081111561015a57600080fd5b82018360208201111561016c57600080fd5b8035906020019184600183028401116401000000008311171561018e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103a8565b005b3480156101ee57600080fd5b5061021b6004803603602081101561020557600080fd5b810190808035906020019092919050505061050d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026957600080fd5b50610272610549565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102b557808201518184015260208101905061029a565b505050509050019250505060405180910390f35b3480156102d557600080fd5b506102de6105d7565b6040518082815260200191505060405180910390f35b6060600080548060200260200160405190810160405280929190818152602001828054801561037857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161032e575b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003073ffffffffffffffffffffffffffffffffffffffff1631838334336040516103d2906105e3565b80858152602001806020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825285818151815260200191508051906020019080838360005b8381101561044d578082015181840152602081019050610432565b50505050905090810190601f16801561047a5780820380516001836020036101000a031916815260200191505b50955050505050506040518091039082f08015801561049d573d6000803e3d6000fd5b509050905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000818154811061051a57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156105cd57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610583575b5050505050905090565b60008080549050905090565b610848806105f18339019056fe60806040526040516108483803806108488339810180604052608081101561002657600080fd5b8101908080519060200190929190805164010000000081111561004857600080fd5b8281019050602081018481111561005e57600080fd5b815185600182028301116401000000008211171561007b57600080fd5b50509291906020018051906020019092919080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836002819055508160038190555082600490805190602001906100fe929190610123565b506000600760006101000a81548160ff021916908315150217905550505050506101c8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b6101c591905b808211156101c15760008160009055506001016101a9565b5090565b90565b610671806101d76000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063522e117711610066578063522e1177146101c757806365213840146101e9578063a2fb117514610207578063e80380a414610275578063f71d96cb1461027f57610093565b806306fdde0314610098578063409ca41f1461011b578063481c6a751461015f5780634c2412a2146101a9575b600080fd5b6100a06102ed565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015d6004803603602081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061038b565b005b610167610458565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101b161047d565b6040518082815260200191505060405180910390f35b6101cf610483565b604051808215151515815260200191505060405180910390f35b6101f1610496565b6040518082815260200191505060405180910390f35b6102336004803603602081101561021d57600080fd5b810190808035906020019092919050505061049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027d6104d8565b005b6102ab6004803603602081101561029557600080fd5b8101908080359060200190929190505050610609565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e457600080fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661043a57600080fd5b6001600760006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600760009054906101000a900460ff1681565b60035481565b600581815481106104a957fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561052f57600080fd5b600760009054906101000a900460ff161561054957600080fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6001818154811061061657fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820f393bb3d8853da3b4afba2ae77bd94feb73f42ebc7903bc7ccfe39b6ada827c70029a165627a7a72305820aa04515ebc011ed183fc73251dbd71c21a52153c86ff214602067820b6e1d9680029","deployedBytecode":"0x6080604052600436106100555760003560e01c80631fe127cd1461005a578063481c6a75146100c6578063687a5e7b1461011d5780636ee44031146101e25780639f6c0ce31461025d578063eb1fa9fa146102c9575b600080fd5b34801561006657600080fd5b5061006f6102f4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100b2578082015181840152602081019050610097565b505050509050019250505060405180910390f35b3480156100d257600080fd5b506100db610382565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101e06004803603604081101561013357600080fd5b81019080803590602001909291908035906020019064010000000081111561015a57600080fd5b82018360208201111561016c57600080fd5b8035906020019184600183028401116401000000008311171561018e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103a8565b005b3480156101ee57600080fd5b5061021b6004803603602081101561020557600080fd5b810190808035906020019092919050505061050d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026957600080fd5b50610272610549565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102b557808201518184015260208101905061029a565b505050509050019250505060405180910390f35b3480156102d557600080fd5b506102de6105d7565b6040518082815260200191505060405180910390f35b6060600080548060200260200160405190810160405280929190818152602001828054801561037857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161032e575b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003073ffffffffffffffffffffffffffffffffffffffff1631838334336040516103d2906105e3565b80858152602001806020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825285818151815260200191508051906020019080838360005b8381101561044d578082015181840152602081019050610432565b50505050905090810190601f16801561047a5780820380516001836020036101000a031916815260200191505b50955050505050506040518091039082f08015801561049d573d6000803e3d6000fd5b509050905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000818154811061051a57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156105cd57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610583575b5050505050905090565b60008080549050905090565b610848806105f18339019056fe60806040526040516108483803806108488339810180604052608081101561002657600080fd5b8101908080519060200190929190805164010000000081111561004857600080fd5b8281019050602081018481111561005e57600080fd5b815185600182028301116401000000008211171561007b57600080fd5b50509291906020018051906020019092919080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836002819055508160038190555082600490805190602001906100fe929190610123565b506000600760006101000a81548160ff021916908315150217905550505050506101c8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b6101c591905b808211156101c15760008160009055506001016101a9565b5090565b90565b610671806101d76000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063522e117711610066578063522e1177146101c757806365213840146101e9578063a2fb117514610207578063e80380a414610275578063f71d96cb1461027f57610093565b806306fdde0314610098578063409ca41f1461011b578063481c6a751461015f5780634c2412a2146101a9575b600080fd5b6100a06102ed565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015d6004803603602081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061038b565b005b610167610458565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101b161047d565b6040518082815260200191505060405180910390f35b6101cf610483565b604051808215151515815260200191505060405180910390f35b6101f1610496565b6040518082815260200191505060405180910390f35b6102336004803603602081101561021d57600080fd5b810190808035906020019092919050505061049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61027d6104d8565b005b6102ab6004803603602081101561029557600080fd5b8101908080359060200190929190505050610609565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103835780601f1061035857610100808354040283529160200191610383565b820191906000526020600020905b81548152906001019060200180831161036657829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e457600080fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661043a57600080fd5b6001600760006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600760009054906101000a900460ff1681565b60035481565b600581815481106104a957fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561052f57600080fd5b600760009054906101000a900460ff161561054957600080fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6001818154811061061657fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a72305820f393bb3d8853da3b4afba2ae77bd94feb73f42ebc7903bc7ccfe39b6ada827c70029a165627a7a72305820aa04515ebc011ed183fc73251dbd71c21a52153c86ff214602067820b6e1d9680029","sourceMap":"57:1125:4:-;;;269:82;8:9:-1;5:2;;;30:1;27;20:12;5:2;269:82:4;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;269:82:4;;;;;;;;;;;;;;;;326:7;316;;:17;;;;;;;;;;;;;;;;;;269:82;57:1125;;;;;;","deployedSourceMap":"57:1125:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1043:120;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1043:120:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1043:120:4;;;;;;;;;;;;;;;;;126:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;126:22:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;415:383;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;415:383:4;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;415:383:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;415:383:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;415:383:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;415:383:4;;;;;;;;;;;;;;;:::i;:::-;;78:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;78:43:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;78:43:4;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;804:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;804:114:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;804:114:4;;;;;;;;;;;;;;;;;927:110;;8:9:-1;5:2;;;30:1;27;20:12;5:2;927:110:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1043:120;1093:22;1135:20;1127:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1043:120;:::o;126:22::-;;;;;;;;;;;;;:::o;415:383::-;618:18;672:4;664:21;;;687:14;704:9;715;726:10;639:98;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;639:98:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;639:98:4;;;618:119;;748:20;774:5;748:32;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;748:32:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;415:383;;;:::o;78:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;804:114::-;850:21;890:20;883:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;804:114;:::o;927:110::-;978:4;1002:20;:27;;;;994:35;;927:110;:::o;57:1125::-;;;;;;;;:::o","source":"pragma solidity ^0.5.0;\r\n\r\nimport \"./Competitions.sol\";\r\ncontract League {\r\n\r\nCompetitions [] public deployedCompetitions;\r\n\r\naddress public manager;\r\n    //restrictor\r\n    modifier restricted(){\r\n        require(msg.sender == manager);\r\n        _;\r\n    }\r\n   \r\n  \r\n   constructor(address creator ) public{\r\n        manager = creator;\r\n        \r\n    }\r\n    //create Competition\r\n   \r\n    //deploy competitions\r\n    function deployCompetition( uint maximumPlayers,\r\n    string memory compeName)public payable{\r\n        //Competitions compe = new Competitions(maximumPlayers,  compeName, msg.value, msg.sender);\r\n       Competitions compe = (new Competitions).value(address(this).balance)(maximumPlayers,  compeName, msg.value, msg.sender);\r\n        deployedCompetitions.push(compe);\r\n        \r\n    }\r\n    function getCompetitions()public view returns(Competitions[] memory){\r\n        return deployedCompetitions;\r\n    }\r\n \r\n    function getCompetitionCount() public view returns(uint){\r\n        return  deployedCompetitions.length;\r\n    }\r\n    function getAllCompetitions() public view returns(Competitions [] memory){\r\n        return  deployedCompetitions;\r\n    }\r\n        \r\n    \r\n}\r\n","sourcePath":"C:/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol","ast":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol","exportedSymbols":{"League":[374]},"id":375,"nodeType":"SourceUnit","nodes":[{"id":286,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol","file":"./Competitions.sol","id":287,"nodeType":"ImportDirective","scope":375,"sourceUnit":115,"src":"27:28:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[114],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":374,"linearizedBaseContracts":[374],"name":"League","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":290,"name":"deployedCompetitions","nodeType":"VariableDeclaration","scope":374,"src":"78:43:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[]"},"typeName":{"baseType":{"contractScope":null,"id":288,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"78:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"id":289,"length":null,"nodeType":"ArrayTypeName","src":"78:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage_ptr","typeString":"contract Competitions[]"}},"value":null,"visibility":"public"},{"constant":false,"id":292,"name":"manager","nodeType":"VariableDeclaration","scope":374,"src":"126:22:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":291,"name":"address","nodeType":"ElementaryTypeName","src":"126:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"body":{"id":302,"nodeType":"Block","src":"194:61:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":298,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":295,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"213:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":296,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"213:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":297,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":292,"src":"227:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"213:21:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":294,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"205:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"205:30:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":300,"nodeType":"ExpressionStatement","src":"205:30:4"},{"id":301,"nodeType":"PlaceholderStatement","src":"246:1:4"}]},"documentation":null,"id":303,"name":"restricted","nodeType":"ModifierDefinition","parameters":{"id":293,"nodeType":"ParameterList","parameters":[],"src":"192:2:4"},"src":"173:82:4","visibility":"internal"},{"body":{"id":312,"nodeType":"Block","src":"305:46:4","statements":[{"expression":{"argumentTypes":null,"id":310,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":308,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":292,"src":"316:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":309,"name":"creator","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":305,"src":"326:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"316:17:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":311,"nodeType":"ExpressionStatement","src":"316:17:4"}]},"documentation":null,"id":313,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":306,"nodeType":"ParameterList","parameters":[{"constant":false,"id":305,"name":"creator","nodeType":"VariableDeclaration","scope":313,"src":"281:15:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":304,"name":"address","nodeType":"ElementaryTypeName","src":"281:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"280:18:4"},"returnParameters":{"id":307,"nodeType":"ParameterList","parameters":[],"src":"305:0:4"},"scope":374,"src":"269:82:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":345,"nodeType":"Block","src":"507:291:4","statements":[{"assignments":[321],"declarations":[{"constant":false,"id":321,"name":"compe","nodeType":"VariableDeclaration","scope":345,"src":"618:18:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"},"typeName":{"contractScope":null,"id":320,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"618:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"value":null,"visibility":"internal"}],"id":338,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":331,"name":"maximumPlayers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"687:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":332,"name":"compeName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":317,"src":"704:9:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":333,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"715:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":334,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"715:9:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":335,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"726:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":336,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"726:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":327,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":839,"src":"672:4:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$374","typeString":"contract League"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_League_$374","typeString":"contract League"}],"id":326,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"664:7:4","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":328,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"664:13:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":329,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"664:21:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"id":323,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"640:16:4","typeDescriptions":{"typeIdentifier":"t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$","typeString":"function (uint256,string memory,uint256,address) payable returns (contract Competitions)"},"typeName":{"contractScope":null,"id":322,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"644:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}}}],"id":324,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"639:18:4","typeDescriptions":{"typeIdentifier":"t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$","typeString":"function (uint256,string memory,uint256,address) payable returns (contract Competitions)"}},"id":325,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"639:24:4","typeDescriptions":{"typeIdentifier":"t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$value_$","typeString":"function (uint256) returns (function (uint256,string memory,uint256,address) payable returns (contract Competitions))"}},"id":330,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"639:47:4","typeDescriptions":{"typeIdentifier":"t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$value","typeString":"function (uint256,string memory,uint256,address) payable returns (contract Competitions)"}},"id":337,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"639:98:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"nodeType":"VariableDeclarationStatement","src":"618:119:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":342,"name":"compe","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":321,"src":"774:5:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}],"expression":{"argumentTypes":null,"id":339,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"748:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"id":341,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"748:25:4","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_contract$_Competitions_$114_$returns$_t_uint256_$","typeString":"function (contract Competitions) returns (uint256)"}},"id":343,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"748:32:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":344,"nodeType":"ExpressionStatement","src":"748:32:4"}]},"documentation":null,"id":346,"implemented":true,"kind":"function","modifiers":[],"name":"deployCompetition","nodeType":"FunctionDefinition","parameters":{"id":318,"nodeType":"ParameterList","parameters":[{"constant":false,"id":315,"name":"maximumPlayers","nodeType":"VariableDeclaration","scope":346,"src":"443:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":314,"name":"uint","nodeType":"ElementaryTypeName","src":"443:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":317,"name":"compeName","nodeType":"VariableDeclaration","scope":346,"src":"469:23:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":316,"name":"string","nodeType":"ElementaryTypeName","src":"469:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"441:52:4"},"returnParameters":{"id":319,"nodeType":"ParameterList","parameters":[],"src":"507:0:4"},"scope":374,"src":"415:383:4","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":354,"nodeType":"Block","src":"872:46:4","statements":[{"expression":{"argumentTypes":null,"id":352,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"890:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"functionReturnParameters":351,"id":353,"nodeType":"Return","src":"883:27:4"}]},"documentation":null,"id":355,"implemented":true,"kind":"function","modifiers":[],"name":"getCompetitions","nodeType":"FunctionDefinition","parameters":{"id":347,"nodeType":"ParameterList","parameters":[],"src":"828:2:4"},"returnParameters":{"id":351,"nodeType":"ParameterList","parameters":[{"constant":false,"id":350,"name":"","nodeType":"VariableDeclaration","scope":355,"src":"850:21:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_memory_ptr","typeString":"contract Competitions[]"},"typeName":{"baseType":{"contractScope":null,"id":348,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"850:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"id":349,"length":null,"nodeType":"ArrayTypeName","src":"850:14:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage_ptr","typeString":"contract Competitions[]"}},"value":null,"visibility":"internal"}],"src":"849:23:4"},"scope":374,"src":"804:114:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":363,"nodeType":"Block","src":"983:54:4","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":360,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"1002:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"id":361,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1002:27:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":359,"id":362,"nodeType":"Return","src":"994:35:4"}]},"documentation":null,"id":364,"implemented":true,"kind":"function","modifiers":[],"name":"getCompetitionCount","nodeType":"FunctionDefinition","parameters":{"id":356,"nodeType":"ParameterList","parameters":[],"src":"955:2:4"},"returnParameters":{"id":359,"nodeType":"ParameterList","parameters":[{"constant":false,"id":358,"name":"","nodeType":"VariableDeclaration","scope":364,"src":"978:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":357,"name":"uint","nodeType":"ElementaryTypeName","src":"978:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"977:6:4"},"scope":374,"src":"927:110:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":372,"nodeType":"Block","src":"1116:47:4","statements":[{"expression":{"argumentTypes":null,"id":370,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"1135:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"functionReturnParameters":369,"id":371,"nodeType":"Return","src":"1127:28:4"}]},"documentation":null,"id":373,"implemented":true,"kind":"function","modifiers":[],"name":"getAllCompetitions","nodeType":"FunctionDefinition","parameters":{"id":365,"nodeType":"ParameterList","parameters":[],"src":"1070:2:4"},"returnParameters":{"id":369,"nodeType":"ParameterList","parameters":[{"constant":false,"id":368,"name":"","nodeType":"VariableDeclaration","scope":373,"src":"1093:22:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_memory_ptr","typeString":"contract Competitions[]"},"typeName":{"baseType":{"contractScope":null,"id":366,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"1093:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"id":367,"length":null,"nodeType":"ArrayTypeName","src":"1093:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage_ptr","typeString":"contract Competitions[]"}},"value":null,"visibility":"internal"}],"src":"1092:24:4"},"scope":374,"src":"1043:120:4","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":375,"src":"57:1125:4"}],"src":"0:1184:4"},"legacyAST":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol","exportedSymbols":{"League":[374]},"id":375,"nodeType":"SourceUnit","nodes":[{"id":286,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol","file":"./Competitions.sol","id":287,"nodeType":"ImportDirective","scope":375,"sourceUnit":115,"src":"27:28:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[114],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":374,"linearizedBaseContracts":[374],"name":"League","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":290,"name":"deployedCompetitions","nodeType":"VariableDeclaration","scope":374,"src":"78:43:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[]"},"typeName":{"baseType":{"contractScope":null,"id":288,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"78:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"id":289,"length":null,"nodeType":"ArrayTypeName","src":"78:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage_ptr","typeString":"contract Competitions[]"}},"value":null,"visibility":"public"},{"constant":false,"id":292,"name":"manager","nodeType":"VariableDeclaration","scope":374,"src":"126:22:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":291,"name":"address","nodeType":"ElementaryTypeName","src":"126:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"body":{"id":302,"nodeType":"Block","src":"194:61:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":298,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":295,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"213:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":296,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"213:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":297,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":292,"src":"227:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"213:21:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":294,"name":"require","nodeType":"Identifier","overloadedDeclarations":[820,821],"referencedDeclaration":820,"src":"205:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"205:30:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":300,"nodeType":"ExpressionStatement","src":"205:30:4"},{"id":301,"nodeType":"PlaceholderStatement","src":"246:1:4"}]},"documentation":null,"id":303,"name":"restricted","nodeType":"ModifierDefinition","parameters":{"id":293,"nodeType":"ParameterList","parameters":[],"src":"192:2:4"},"src":"173:82:4","visibility":"internal"},{"body":{"id":312,"nodeType":"Block","src":"305:46:4","statements":[{"expression":{"argumentTypes":null,"id":310,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":308,"name":"manager","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":292,"src":"316:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":309,"name":"creator","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":305,"src":"326:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"316:17:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":311,"nodeType":"ExpressionStatement","src":"316:17:4"}]},"documentation":null,"id":313,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":306,"nodeType":"ParameterList","parameters":[{"constant":false,"id":305,"name":"creator","nodeType":"VariableDeclaration","scope":313,"src":"281:15:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":304,"name":"address","nodeType":"ElementaryTypeName","src":"281:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"280:18:4"},"returnParameters":{"id":307,"nodeType":"ParameterList","parameters":[],"src":"305:0:4"},"scope":374,"src":"269:82:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":345,"nodeType":"Block","src":"507:291:4","statements":[{"assignments":[321],"declarations":[{"constant":false,"id":321,"name":"compe","nodeType":"VariableDeclaration","scope":345,"src":"618:18:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"},"typeName":{"contractScope":null,"id":320,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"618:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"value":null,"visibility":"internal"}],"id":338,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":331,"name":"maximumPlayers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":315,"src":"687:14:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":332,"name":"compeName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":317,"src":"704:9:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":333,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"715:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":334,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"715:9:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":335,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"726:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":336,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"726:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":327,"name":"this","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":839,"src":"672:4:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$374","typeString":"contract League"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_League_$374","typeString":"contract League"}],"id":326,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"664:7:4","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":"address"},"id":328,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"664:13:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":329,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"balance","nodeType":"MemberAccess","referencedDeclaration":null,"src":"664:21:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"id":323,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"640:16:4","typeDescriptions":{"typeIdentifier":"t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$","typeString":"function (uint256,string memory,uint256,address) payable returns (contract Competitions)"},"typeName":{"contractScope":null,"id":322,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"644:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}}}],"id":324,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"639:18:4","typeDescriptions":{"typeIdentifier":"t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$","typeString":"function (uint256,string memory,uint256,address) payable returns (contract Competitions)"}},"id":325,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"value","nodeType":"MemberAccess","referencedDeclaration":null,"src":"639:24:4","typeDescriptions":{"typeIdentifier":"t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$value_$","typeString":"function (uint256) returns (function (uint256,string memory,uint256,address) payable returns (contract Competitions))"}},"id":330,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"639:47:4","typeDescriptions":{"typeIdentifier":"t_function_creation_payable$_t_uint256_$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$_t_contract$_Competitions_$114_$value","typeString":"function (uint256,string memory,uint256,address) payable returns (contract Competitions)"}},"id":337,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"639:98:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"nodeType":"VariableDeclarationStatement","src":"618:119:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":342,"name":"compe","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":321,"src":"774:5:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}],"expression":{"argumentTypes":null,"id":339,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"748:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"id":341,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"748:25:4","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_contract$_Competitions_$114_$returns$_t_uint256_$","typeString":"function (contract Competitions) returns (uint256)"}},"id":343,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"748:32:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":344,"nodeType":"ExpressionStatement","src":"748:32:4"}]},"documentation":null,"id":346,"implemented":true,"kind":"function","modifiers":[],"name":"deployCompetition","nodeType":"FunctionDefinition","parameters":{"id":318,"nodeType":"ParameterList","parameters":[{"constant":false,"id":315,"name":"maximumPlayers","nodeType":"VariableDeclaration","scope":346,"src":"443:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":314,"name":"uint","nodeType":"ElementaryTypeName","src":"443:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":317,"name":"compeName","nodeType":"VariableDeclaration","scope":346,"src":"469:23:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":316,"name":"string","nodeType":"ElementaryTypeName","src":"469:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"441:52:4"},"returnParameters":{"id":319,"nodeType":"ParameterList","parameters":[],"src":"507:0:4"},"scope":374,"src":"415:383:4","stateMutability":"payable","superFunction":null,"visibility":"public"},{"body":{"id":354,"nodeType":"Block","src":"872:46:4","statements":[{"expression":{"argumentTypes":null,"id":352,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"890:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"functionReturnParameters":351,"id":353,"nodeType":"Return","src":"883:27:4"}]},"documentation":null,"id":355,"implemented":true,"kind":"function","modifiers":[],"name":"getCompetitions","nodeType":"FunctionDefinition","parameters":{"id":347,"nodeType":"ParameterList","parameters":[],"src":"828:2:4"},"returnParameters":{"id":351,"nodeType":"ParameterList","parameters":[{"constant":false,"id":350,"name":"","nodeType":"VariableDeclaration","scope":355,"src":"850:21:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_memory_ptr","typeString":"contract Competitions[]"},"typeName":{"baseType":{"contractScope":null,"id":348,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"850:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"id":349,"length":null,"nodeType":"ArrayTypeName","src":"850:14:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage_ptr","typeString":"contract Competitions[]"}},"value":null,"visibility":"internal"}],"src":"849:23:4"},"scope":374,"src":"804:114:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":363,"nodeType":"Block","src":"983:54:4","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":360,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"1002:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"id":361,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1002:27:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":359,"id":362,"nodeType":"Return","src":"994:35:4"}]},"documentation":null,"id":364,"implemented":true,"kind":"function","modifiers":[],"name":"getCompetitionCount","nodeType":"FunctionDefinition","parameters":{"id":356,"nodeType":"ParameterList","parameters":[],"src":"955:2:4"},"returnParameters":{"id":359,"nodeType":"ParameterList","parameters":[{"constant":false,"id":358,"name":"","nodeType":"VariableDeclaration","scope":364,"src":"978:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":357,"name":"uint","nodeType":"ElementaryTypeName","src":"978:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"977:6:4"},"scope":374,"src":"927:110:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":372,"nodeType":"Block","src":"1116:47:4","statements":[{"expression":{"argumentTypes":null,"id":370,"name":"deployedCompetitions","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":290,"src":"1135:20:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage","typeString":"contract Competitions[] storage ref"}},"functionReturnParameters":369,"id":371,"nodeType":"Return","src":"1127:28:4"}]},"documentation":null,"id":373,"implemented":true,"kind":"function","modifiers":[],"name":"getAllCompetitions","nodeType":"FunctionDefinition","parameters":{"id":365,"nodeType":"ParameterList","parameters":[],"src":"1070:2:4"},"returnParameters":{"id":369,"nodeType":"ParameterList","parameters":[{"constant":false,"id":368,"name":"","nodeType":"VariableDeclaration","scope":373,"src":"1093:22:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_memory_ptr","typeString":"contract Competitions[]"},"typeName":{"baseType":{"contractScope":null,"id":366,"name":"Competitions","nodeType":"UserDefinedTypeName","referencedDeclaration":114,"src":"1093:12:4","typeDescriptions":{"typeIdentifier":"t_contract$_Competitions_$114","typeString":"contract Competitions"}},"id":367,"length":null,"nodeType":"ArrayTypeName","src":"1093:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_Competitions_$114_$dyn_storage_ptr","typeString":"contract Competitions[]"}},"value":null,"visibility":"internal"}],"src":"1092:24:4"},"scope":374,"src":"1043:120:4","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":375,"src":"57:1125:4"}],"src":"0:1184:4"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.11","updatedAt":"2019-06-26T21:23:29.432Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./build/contracts/LeagueFactory.json":
/*!********************************************!*\
  !*** ./build/contracts/LeagueFactory.json ***!
  \********************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"LeagueFactory","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedLeagues","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[],"name":"deployLeague","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetAllLeagues","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deleteAllLeagues","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5061133a806100206000396000f3fe608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806324f688991461006757806339f82761146100d35780633eb1f5dd146100ea57806358cc52cf14610165575b600080fd5b34801561007357600080fd5b5061007c61017c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100bf5780820151818401526020810190506100a4565b505050509050019250505060405180910390f35b3480156100df57600080fd5b506100e861020a565b005b3480156100f657600080fd5b506101236004803603602081101561010d57600080fd5b81019080803590602001909291905050506102d3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017157600080fd5b5061017a610311565b005b6060600080548060200260200160405190810160405280929190818152602001828054801561020057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101b6575b5050505050905090565b600033610215610330565b808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604051809103906000f080158015610267573d6000803e3d6000fd5b50905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000818154811015156102e257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008061031e9190610340565b6000808054905014151561032e57fe5b565b604051610f888061038783390190565b508054600082559060005260206000209081019061035e9190610361565b50565b61038391905b8082111561037f576000816000905550600101610367565b5090565b9056fe608060405234801561001057600080fd5b50604051602080610f888339810180604052602081101561003057600080fd5b810190808051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610ef6806100926000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631fe127cd1461007d578063481c6a75146100e9578063687a5e7b146101405780636ee44031146102055780639f6c0ce314610280578063eb1fa9fa146102ec575b600080fd5b34801561008957600080fd5b50610092610317565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100d55780820151818401526020810190506100ba565b505050509050019250505060405180910390f35b3480156100f557600080fd5b506100fe6103a5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102036004803603604081101561015657600080fd5b81019080803590602001909291908035906020019064010000000081111561017d57600080fd5b82018360208201111561018f57600080fd5b803590602001918460018302840111640100000000831117156101b157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103cb565b005b34801561021157600080fd5b5061023e6004803603602081101561022857600080fd5b8101908080359060200190929190505050610513565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028c57600080fd5b50610295610551565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102d85780820151818401526020810190506102bd565b505050509050019250505060405180910390f35b3480156102f857600080fd5b506103016105df565b6040518082815260200191505060405180910390f35b6060600080548060200260200160405190810160405280929190818152602001828054801561039b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610351575b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000828234336103d96105eb565b80858152602001806020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825285818151815260200191508051906020019080838360005b83811015610454578082015181840152602081019050610439565b50505050905090810190601f1680156104815780820380516001836020036101000a031916815260200191505b5095505050505050604051809103906000f0801580156104a5573d6000803e3d6000fd5b50905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008181548110151561052257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156105d557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161058b575b5050505050905090565b60008080549050905090565b6040516108cf806105fc8339019056fe60806040526040516108cf3803806108cf8339810180604052608081101561002657600080fd5b8101908080519060200190929190805164010000000081111561004857600080fd5b8281019050602081018481111561005e57600080fd5b815185600182028301116401000000008211171561007b57600080fd5b50509291906020018051906020019092919080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836002819055508160038190555082600490805190602001906100fe929190610123565b506000600760006101000a81548160ff021916908315150217905550505050506101c8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b6101c591905b808211156101c15760008160009055506001016101a9565b5090565b90565b6106f8806101d76000396000f3fe608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009e578063409ca41f1461012e578063481c6a751461017f5780634c2412a2146101d6578063522e1177146102015780636521384014610230578063a2fb11751461025b578063e80380a4146102d6578063f71d96cb146102ed575b600080fd5b3480156100aa57600080fd5b506100b3610368565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f35780820151818401526020810190506100d8565b50505050905090810190601f1680156101205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013a57600080fd5b5061017d6004803603602081101561015157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610406565b005b34801561018b57600080fd5b506101946104d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101e257600080fd5b506101eb6104fc565b6040518082815260200191505060405180910390f35b34801561020d57600080fd5b50610216610502565b604051808215151515815260200191505060405180910390f35b34801561023c57600080fd5b50610245610515565b6040518082815260200191505060405180910390f35b34801561026757600080fd5b506102946004803603602081101561027e57600080fd5b810190808035906020019092919050505061051b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e257600080fd5b506102eb610559565b005b3480156102f957600080fd5b506103266004803603602081101561031057600080fd5b810190808035906020019092919050505061068e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046157600080fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156104b957600080fd5b6001600760006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600760009054906101000a900460ff1681565b60035481565b60058181548110151561052a57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156105b257600080fd5b600760009054906101000a900460ff161515156105ce57600080fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60018181548110151561069d57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a723058204f269aba3ab98276b1a24b89de4a323d125e841f4a0ed16813641b96b78735950029a165627a7a723058200897aeb3685fa903f2e889e9ff2ae48c10ab2dfcdff3ae86095a13ab89d6396b0029a165627a7a723058207c48f9c9f1b2010e8750362e16ff3e93f4e777ae4ad6446793be106dd5b742890029","deployedBytecode":"0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806324f688991461006757806339f82761146100d35780633eb1f5dd146100ea57806358cc52cf14610165575b600080fd5b34801561007357600080fd5b5061007c61017c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100bf5780820151818401526020810190506100a4565b505050509050019250505060405180910390f35b3480156100df57600080fd5b506100e861020a565b005b3480156100f657600080fd5b506101236004803603602081101561010d57600080fd5b81019080803590602001909291905050506102d3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017157600080fd5b5061017a610311565b005b6060600080548060200260200160405190810160405280929190818152602001828054801561020057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101b6575b5050505050905090565b600033610215610330565b808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604051809103906000f080158015610267573d6000803e3d6000fd5b50905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000818154811015156102e257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008061031e9190610340565b6000808054905014151561032e57fe5b565b604051610f888061038783390190565b508054600082559060005260206000209081019061035e9190610361565b50565b61038391905b8082111561037f576000816000905550600101610367565b5090565b9056fe608060405234801561001057600080fd5b50604051602080610f888339810180604052602081101561003057600080fd5b810190808051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610ef6806100926000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631fe127cd1461007d578063481c6a75146100e9578063687a5e7b146101405780636ee44031146102055780639f6c0ce314610280578063eb1fa9fa146102ec575b600080fd5b34801561008957600080fd5b50610092610317565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100d55780820151818401526020810190506100ba565b505050509050019250505060405180910390f35b3480156100f557600080fd5b506100fe6103a5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102036004803603604081101561015657600080fd5b81019080803590602001909291908035906020019064010000000081111561017d57600080fd5b82018360208201111561018f57600080fd5b803590602001918460018302840111640100000000831117156101b157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103cb565b005b34801561021157600080fd5b5061023e6004803603602081101561022857600080fd5b8101908080359060200190929190505050610513565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028c57600080fd5b50610295610551565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102d85780820151818401526020810190506102bd565b505050509050019250505060405180910390f35b3480156102f857600080fd5b506103016105df565b6040518082815260200191505060405180910390f35b6060600080548060200260200160405190810160405280929190818152602001828054801561039b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610351575b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000828234336103d96105eb565b80858152602001806020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825285818151815260200191508051906020019080838360005b83811015610454578082015181840152602081019050610439565b50505050905090810190601f1680156104815780820380516001836020036101000a031916815260200191505b5095505050505050604051809103906000f0801580156104a5573d6000803e3d6000fd5b50905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008181548110151561052257fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156105d557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161058b575b5050505050905090565b60008080549050905090565b6040516108cf806105fc8339019056fe60806040526040516108cf3803806108cf8339810180604052608081101561002657600080fd5b8101908080519060200190929190805164010000000081111561004857600080fd5b8281019050602081018481111561005e57600080fd5b815185600182028301116401000000008211171561007b57600080fd5b50509291906020018051906020019092919080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836002819055508160038190555082600490805190602001906100fe929190610123565b506000600760006101000a81548160ff021916908315150217905550505050506101c8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016457805160ff1916838001178555610192565b82800160010185558215610192579182015b82811115610191578251825591602001919060010190610176565b5b50905061019f91906101a3565b5090565b6101c591905b808211156101c15760008160009055506001016101a9565b5090565b90565b6106f8806101d76000396000f3fe608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009e578063409ca41f1461012e578063481c6a751461017f5780634c2412a2146101d6578063522e1177146102015780636521384014610230578063a2fb11751461025b578063e80380a4146102d6578063f71d96cb146102ed575b600080fd5b3480156100aa57600080fd5b506100b3610368565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f35780820151818401526020810190506100d8565b50505050905090810190601f1680156101205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013a57600080fd5b5061017d6004803603602081101561015157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610406565b005b34801561018b57600080fd5b506101946104d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101e257600080fd5b506101eb6104fc565b6040518082815260200191505060405180910390f35b34801561020d57600080fd5b50610216610502565b604051808215151515815260200191505060405180910390f35b34801561023c57600080fd5b50610245610515565b6040518082815260200191505060405180910390f35b34801561026757600080fd5b506102946004803603602081101561027e57600080fd5b810190808035906020019092919050505061051b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e257600080fd5b506102eb610559565b005b3480156102f957600080fd5b506103266004803603602081101561031057600080fd5b810190808035906020019092919050505061068e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046157600080fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156104b957600080fd5b6001600760006101000a81548160ff02191690831515021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600760009054906101000a900460ff1681565b60035481565b60058181548110151561052a57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156105b257600080fd5b600760009054906101000a900460ff161515156105ce57600080fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60018181548110151561069d57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a723058204f269aba3ab98276b1a24b89de4a323d125e841f4a0ed16813641b96b78735950029a165627a7a723058200897aeb3685fa903f2e889e9ff2ae48c10ab2dfcdff3ae86095a13ab89d6396b0029a165627a7a723058207c48f9c9f1b2010e8750362e16ff3e93f4e777ae4ad6446793be106dd5b742890029","sourceMap":"84:545:4:-;;;599:27;8:9:-1;5:2;;;30:1;27;20:12;5:2;599:27:4;84:545;;;;;;","deployedSourceMap":"84:545:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;353:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;353:103:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;353:103:4;;;;;;;;;;;;;;;;;207:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;207:142:4;;;;;;113:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;113:34:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;113:34:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;462:124;;8:9:-1;5:2;;;30:1;27;20:12;5:2;462:124:4;;;;;;353:103;399:15;433;426:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;353:103;:::o;207:142::-;248:16;278:10;267:22;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;267:22:4;248:41;;300:15;321:9;300:31;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;300:31:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;207:142;:::o;113:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;462:124::-;516:15;;509:22;;;;:::i;:::-;576:1;550:15;:22;;;;:27;543:35;;;;;;462:124::o;84:545::-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.5.0;\r\n\r\nimport \"./leagues.sol\";\r\nimport \"./Competitions.sol\";\r\n\r\ncontract LeagueFactory {\r\n   League []  public  deployedLeagues;\r\n//   Competitions [] public deployedCompetitions;\r\n\r\n\r\n  function deployLeague() public{\r\n        League newLeague = new League(msg.sender);\r\n        deployedLeagues.push(newLeague);\r\n        \r\n    }\r\n  function GetAllLeagues() public view returns (League[] memory){\r\n        return deployedLeagues;\r\n    }\r\n    function deleteAllLeagues() public {\r\n         delete deployedLeagues;\r\n         assert(deployedLeagues.length == 0);\r\n    }\r\n       \r\n  constructor() public {\r\n  }\r\n}","sourcePath":"C:/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol","ast":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol","exportedSymbols":{"LeagueFactory":[337]},"id":338,"nodeType":"SourceUnit","nodes":[{"id":286,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/leagues.sol","file":"./leagues.sol","id":287,"nodeType":"ImportDirective","scope":338,"sourceUnit":421,"src":"27:23:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol","file":"./Competitions.sol","id":288,"nodeType":"ImportDirective","scope":338,"sourceUnit":115,"src":"52:28:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[420],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":337,"linearizedBaseContracts":[337],"name":"LeagueFactory","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":291,"name":"deployedLeagues","nodeType":"VariableDeclaration","scope":337,"src":"113:34:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[]"},"typeName":{"baseType":{"contractScope":null,"id":289,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"113:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"id":290,"length":null,"nodeType":"ArrayTypeName","src":"113:9:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage_ptr","typeString":"contract League[]"}},"value":null,"visibility":"public"},{"body":{"id":308,"nodeType":"Block","src":"237:112:4","statements":[{"assignments":[295],"declarations":[{"constant":false,"id":295,"name":"newLeague","nodeType":"VariableDeclaration","scope":308,"src":"248:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"},"typeName":{"contractScope":null,"id":294,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"248:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"value":null,"visibility":"internal"}],"id":301,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":298,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":435,"src":"278:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"278:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":297,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"267:10:4","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_address_$returns$_t_contract$_League_$420_$","typeString":"function (address) returns (contract League)"},"typeName":{"contractScope":null,"id":296,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"271:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}}},"id":300,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"267:22:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"nodeType":"VariableDeclarationStatement","src":"248:41:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":305,"name":"newLeague","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":295,"src":"321:9:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}],"expression":{"argumentTypes":null,"id":302,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"300:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"id":304,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"300:20:4","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_contract$_League_$420_$returns$_t_uint256_$","typeString":"function (contract League) returns (uint256)"}},"id":306,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"300:31:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":307,"nodeType":"ExpressionStatement","src":"300:31:4"}]},"documentation":null,"id":309,"implemented":true,"kind":"function","modifiers":[],"name":"deployLeague","nodeType":"FunctionDefinition","parameters":{"id":292,"nodeType":"ParameterList","parameters":[],"src":"228:2:4"},"returnParameters":{"id":293,"nodeType":"ParameterList","parameters":[],"src":"237:0:4"},"scope":337,"src":"207:142:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":317,"nodeType":"Block","src":"415:41:4","statements":[{"expression":{"argumentTypes":null,"id":315,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"433:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"functionReturnParameters":314,"id":316,"nodeType":"Return","src":"426:22:4"}]},"documentation":null,"id":318,"implemented":true,"kind":"function","modifiers":[],"name":"GetAllLeagues","nodeType":"FunctionDefinition","parameters":{"id":310,"nodeType":"ParameterList","parameters":[],"src":"375:2:4"},"returnParameters":{"id":314,"nodeType":"ParameterList","parameters":[{"constant":false,"id":313,"name":"","nodeType":"VariableDeclaration","scope":318,"src":"399:15:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_memory_ptr","typeString":"contract League[]"},"typeName":{"baseType":{"contractScope":null,"id":311,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"399:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"id":312,"length":null,"nodeType":"ArrayTypeName","src":"399:8:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage_ptr","typeString":"contract League[]"}},"value":null,"visibility":"internal"}],"src":"398:17:4"},"scope":337,"src":"353:103:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":331,"nodeType":"Block","src":"497:89:4","statements":[{"expression":{"argumentTypes":null,"id":322,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"delete","prefix":true,"src":"509:22:4","subExpression":{"argumentTypes":null,"id":321,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"516:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":323,"nodeType":"ExpressionStatement","src":"509:22:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":328,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":325,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"550:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"id":326,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"550:22:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":327,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"576:1:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"550:27:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":324,"name":"assert","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":424,"src":"543:6:4","typeDescriptions":{"typeIdentifier":"t_function_assert_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":329,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"543:35:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":330,"nodeType":"ExpressionStatement","src":"543:35:4"}]},"documentation":null,"id":332,"implemented":true,"kind":"function","modifiers":[],"name":"deleteAllLeagues","nodeType":"FunctionDefinition","parameters":{"id":319,"nodeType":"ParameterList","parameters":[],"src":"487:2:4"},"returnParameters":{"id":320,"nodeType":"ParameterList","parameters":[],"src":"497:0:4"},"scope":337,"src":"462:124:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":335,"nodeType":"Block","src":"620:6:4","statements":[]},"documentation":null,"id":336,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":333,"nodeType":"ParameterList","parameters":[],"src":"610:2:4"},"returnParameters":{"id":334,"nodeType":"ParameterList","parameters":[],"src":"620:0:4"},"scope":337,"src":"599:27:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":338,"src":"84:545:4"}],"src":"0:629:4"},"legacyAST":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/factory.sol","exportedSymbols":{"LeagueFactory":[337]},"id":338,"nodeType":"SourceUnit","nodes":[{"id":286,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/leagues.sol","file":"./leagues.sol","id":287,"nodeType":"ImportDirective","scope":338,"sourceUnit":421,"src":"27:23:4","symbolAliases":[],"unitAlias":""},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/Competitions.sol","file":"./Competitions.sol","id":288,"nodeType":"ImportDirective","scope":338,"sourceUnit":115,"src":"52:28:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[420],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":337,"linearizedBaseContracts":[337],"name":"LeagueFactory","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":291,"name":"deployedLeagues","nodeType":"VariableDeclaration","scope":337,"src":"113:34:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[]"},"typeName":{"baseType":{"contractScope":null,"id":289,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"113:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"id":290,"length":null,"nodeType":"ArrayTypeName","src":"113:9:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage_ptr","typeString":"contract League[]"}},"value":null,"visibility":"public"},{"body":{"id":308,"nodeType":"Block","src":"237:112:4","statements":[{"assignments":[295],"declarations":[{"constant":false,"id":295,"name":"newLeague","nodeType":"VariableDeclaration","scope":308,"src":"248:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"},"typeName":{"contractScope":null,"id":294,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"248:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"value":null,"visibility":"internal"}],"id":301,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":298,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":435,"src":"278:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"278:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":297,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"NewExpression","src":"267:10:4","typeDescriptions":{"typeIdentifier":"t_function_creation_nonpayable$_t_address_$returns$_t_contract$_League_$420_$","typeString":"function (address) returns (contract League)"},"typeName":{"contractScope":null,"id":296,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"271:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}}},"id":300,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"267:22:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"nodeType":"VariableDeclarationStatement","src":"248:41:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":305,"name":"newLeague","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":295,"src":"321:9:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}],"expression":{"argumentTypes":null,"id":302,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"300:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"id":304,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"300:20:4","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_contract$_League_$420_$returns$_t_uint256_$","typeString":"function (contract League) returns (uint256)"}},"id":306,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"300:31:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":307,"nodeType":"ExpressionStatement","src":"300:31:4"}]},"documentation":null,"id":309,"implemented":true,"kind":"function","modifiers":[],"name":"deployLeague","nodeType":"FunctionDefinition","parameters":{"id":292,"nodeType":"ParameterList","parameters":[],"src":"228:2:4"},"returnParameters":{"id":293,"nodeType":"ParameterList","parameters":[],"src":"237:0:4"},"scope":337,"src":"207:142:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":317,"nodeType":"Block","src":"415:41:4","statements":[{"expression":{"argumentTypes":null,"id":315,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"433:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"functionReturnParameters":314,"id":316,"nodeType":"Return","src":"426:22:4"}]},"documentation":null,"id":318,"implemented":true,"kind":"function","modifiers":[],"name":"GetAllLeagues","nodeType":"FunctionDefinition","parameters":{"id":310,"nodeType":"ParameterList","parameters":[],"src":"375:2:4"},"returnParameters":{"id":314,"nodeType":"ParameterList","parameters":[{"constant":false,"id":313,"name":"","nodeType":"VariableDeclaration","scope":318,"src":"399:15:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_memory_ptr","typeString":"contract League[]"},"typeName":{"baseType":{"contractScope":null,"id":311,"name":"League","nodeType":"UserDefinedTypeName","referencedDeclaration":420,"src":"399:6:4","typeDescriptions":{"typeIdentifier":"t_contract$_League_$420","typeString":"contract League"}},"id":312,"length":null,"nodeType":"ArrayTypeName","src":"399:8:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage_ptr","typeString":"contract League[]"}},"value":null,"visibility":"internal"}],"src":"398:17:4"},"scope":337,"src":"353:103:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":331,"nodeType":"Block","src":"497:89:4","statements":[{"expression":{"argumentTypes":null,"id":322,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"delete","prefix":true,"src":"509:22:4","subExpression":{"argumentTypes":null,"id":321,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"516:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":323,"nodeType":"ExpressionStatement","src":"509:22:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":328,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":325,"name":"deployedLeagues","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":291,"src":"550:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_contract$_League_$420_$dyn_storage","typeString":"contract League[] storage ref"}},"id":326,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"550:22:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"30","id":327,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"576:1:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"550:27:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":324,"name":"assert","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":424,"src":"543:6:4","typeDescriptions":{"typeIdentifier":"t_function_assert_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":329,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"543:35:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":330,"nodeType":"ExpressionStatement","src":"543:35:4"}]},"documentation":null,"id":332,"implemented":true,"kind":"function","modifiers":[],"name":"deleteAllLeagues","nodeType":"FunctionDefinition","parameters":{"id":319,"nodeType":"ParameterList","parameters":[],"src":"487:2:4"},"returnParameters":{"id":320,"nodeType":"ParameterList","parameters":[],"src":"497:0:4"},"scope":337,"src":"462:124:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":335,"nodeType":"Block","src":"620:6:4","statements":[]},"documentation":null,"id":336,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":333,"nodeType":"ParameterList","parameters":[],"src":"610:2:4"},"returnParameters":{"id":334,"nodeType":"ParameterList","parameters":[],"src":"620:0:4"},"scope":337,"src":"599:27:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":338,"src":"84:545:4"}],"src":"0:629:4"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.5","updatedAt":"2019-05-20T12:22:29.828Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./build/contracts/fantasyCoinV3.json":
/*!********************************************!*\
  !*** ./build/contracts/fantasyCoinV3.json ***!
  \********************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"fantasyCoinV3","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_someone","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_indexed_owner","type":"address"},{"indexed":false,"name":"_indexed_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"additional","type":"uint256"}],"name":"increaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"decrease","type":"uint256"}],"name":"decreaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_someone\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"decrease\",\"type\":\"uint256\"}],\"name\":\"decreaseSupply\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"additional\",\"type\":\"uint256\"}],\"name\":\"increaseSupply\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"initSupply\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_indexed_owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_indexed_spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV3.sol\":\"fantasyCoinV3\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV1.sol\":{\"keccak256\":\"0x5107c67283239c1db22a569a31e3d9823a3b45e221694d516ede410763d01f4f\",\"urls\":[\"bzzr://ad93a2c713fe5df579a18941e724f2bb437230dea7cf3ef2aaab448c5971493b\"]},\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV2.sol\":{\"keccak256\":\"0xc805bee22de7bb7d272689a97b943dee278f6a19f8831e2111850cf028d9d1b3\",\"urls\":[\"bzzr://fec16e64ec1e68871144f9946c41000ade3751575555ed24056e4b29fd579825\"]},\"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV3.sol\":{\"keccak256\":\"0x504051bb64e58a76a78fa86b4349bdc00ac94e1c5d69233d90a69bbc70877dd1\",\"urls\":[\"bzzr://211c939673e7dd9bb61fbb9d5899d08dfc1d6de61822fa71d83833508abe9d04\"]}},\"version\":1}","bytecode":"0x608060405234801561001057600080fd5b50604051602080610e428339810180604052602081101561003057600080fd5b8101908080519060200190929190505050808080600081905550600054600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050610d5f806100e36000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806370a082311161007157806370a082311461025f57806395d89b41146102b757806398e52f9a1461033a578063a9059cbb14610380578063b921e163146103e6578063dd62ed3e1461042c576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019757806323b872dd146101b5578063313ce5671461023b575b600080fd5b6100b66104a4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104dd565b604051808215151515815260200191505060405180910390f35b61019f61061a565b6040518082815260200191505060405180910390f35b610221600480360360608110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610620565b604051808215151515815260200191505060405180910390f35b6102436108de565b604051808260ff1660ff16815260200191505060405180910390f35b6102a16004803603602081101561027557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108e3565b6040518082815260200191505060405180910390f35b6102bf61092c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ff5780820151818401526020810190506102e4565b50505050905090810190601f16801561032c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103666004803603602081101561035057600080fd5b8101908080359060200190929190505050610965565b604051808215151515815260200191505060405180910390f35b6103cc6004803603604081101561039657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a38565b604051808215151515815260200191505060405180910390f35b610412600480360360208110156103fc57600080fd5b8101908080359060200190929190505050610bd9565b604051808215151515815260200191505060405180910390f35b61048e6004803603604081101561044257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cac565b6040518082815260200191505060405180910390f35b6040518060400160405280600c81526020017f46414e5441535920434f494e000000000000000000000000000000000000000081525081565b60008082116104ef5760009050610614565b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b92915050565b60005481565b600080821161063257600090506108d7565b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156106bf57600090506108d7565b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561070f57600090506108d7565b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b9392505050565b600181565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040518060400160405280600381526020017f464643000000000000000000000000000000000000000000000000000000000081525081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109c157600080fd5b600082116109d25760009050610a33565b81600080828254039250508190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550600190505b919050565b60008082118015610a87575081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054105b15610a955760009050610bd3565b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b92915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c3557600080fd5b60008211610c465760009050610ca7565b81600080828254019250508190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600190505b919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056fea165627a7a72305820f47f6e38cc9007ab440e186f41e7ce412d2a2d4340bfc60a8f53fd5e21850a990029","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100a95760003560e01c806370a082311161007157806370a082311461025f57806395d89b41146102b757806398e52f9a1461033a578063a9059cbb14610380578063b921e163146103e6578063dd62ed3e1461042c576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019757806323b872dd146101b5578063313ce5671461023b575b600080fd5b6100b66104a4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104dd565b604051808215151515815260200191505060405180910390f35b61019f61061a565b6040518082815260200191505060405180910390f35b610221600480360360608110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610620565b604051808215151515815260200191505060405180910390f35b6102436108de565b604051808260ff1660ff16815260200191505060405180910390f35b6102a16004803603602081101561027557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108e3565b6040518082815260200191505060405180910390f35b6102bf61092c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ff5780820151818401526020810190506102e4565b50505050905090810190601f16801561032c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103666004803603602081101561035057600080fd5b8101908080359060200190929190505050610965565b604051808215151515815260200191505060405180910390f35b6103cc6004803603604081101561039657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a38565b604051808215151515815260200191505060405180910390f35b610412600480360360208110156103fc57600080fd5b8101908080359060200190929190505050610bd9565b604051808215151515815260200191505060405180910390f35b61048e6004803603604081101561044257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cac565b6040518082815260200191505060405180910390f35b6040518060400160405280600c81526020017f46414e5441535920434f494e000000000000000000000000000000000000000081525081565b60008082116104ef5760009050610614565b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b92915050565b60005481565b600080821161063257600090506108d7565b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156106bf57600090506108d7565b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561070f57600090506108d7565b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b9392505050565b600181565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040518060400160405280600381526020017f464643000000000000000000000000000000000000000000000000000000000081525081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109c157600080fd5b600082116109d25760009050610a33565b81600080828254039250508190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550600190505b919050565b60008082118015610a87575081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054105b15610a955760009050610bd3565b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b92915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c3557600080fd5b60008211610c465760009050610ca7565b81600080828254019250508190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600190505b919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056fea165627a7a72305820f47f6e38cc9007ab440e186f41e7ce412d2a2d4340bfc60a8f53fd5e21850a990029","sourceMap":"60:636:7:-;;;110:131;8:9:-1;5:2;;;30:1;27;20:12;5:2;110:131:7;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;110:131:7;;;;;;;;;;;;;;;;157:10;275::6;463::5;449:11;:24;;;;507:11;;484:8;:20;493:10;484:20;;;;;;;;;;;;;;;:34;;;;537:10;529:5;;:18;;;;;;;;;;;;;;;;;;404:147;229:125:6;110:131:7;60:636;;;;;;","deployedSourceMap":"60:636:7:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;60:636:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;56:43:5;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;56:43:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;636:237:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;636:237:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;193:23:5;;;:::i;:::-;;;;;;;;;;;;;;;;;;;936:450:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;936:450:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;151:33:5;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;945:117;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;945:117:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;106:36;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;106:36:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;480:211:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;480:211:7;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;624:313:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;624:313:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;247:226:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;247:226:7;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;414:134:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;414:134:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;56:43:5;;;;;;;;;;;;;;;;;;;:::o;636:237:6:-;703:12;736:1;727:6;:10;723:28;;746:5;739:12;;;;723:28;795:6;760:10;:22;771:10;760:22;;;;;;;;;;;;;;;:32;783:8;760:32;;;;;;;;;;;;;;;:41;;;;813:38;822:10;834:8;844:6;813:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;865:4;858:11;;636:237;;;;;:::o;193:23:5:-;;;;:::o;936:450:6:-;1017:12;1047:1;1037:6;:11;1033:29;;1057:5;1050:12;;;;1033:29;1162:6;1132:10;:17;1143:5;1132:17;;;;;;;;;;;;;;;:29;1150:10;1132:29;;;;;;;;;;;;;;;;:36;1129:53;;;1177:5;1170:12;;;;1129:53;1208:6;1190:8;:15;1199:5;1190:15;;;;;;;;;;;;;;;;:24;1187:41;;;1223:5;1216:12;;;;1187:41;1252:6;1233:8;:15;1242:5;1233:15;;;;;;;;;;;;;;;;:25;;;;;;;;;;;1278:6;1261:8;:13;1270:3;1261:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;1322:6;1289:10;:17;1300:5;1289:17;;;;;;;;;;;;;;;:29;1307:10;1289:29;;;;;;;;;;;;;;;;:39;;;;;;;;;;;1338:28;1347:5;1354:3;1359:6;1338:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1378:4;1371:11;;936:450;;;;;;:::o;151:33:5:-;183:1;151:33;:::o;945:117::-;1002:15;1036:8;:18;1045:8;1036:18;;;;;;;;;;;;;;;;1029:25;;945:117;;;:::o;106:36::-;;;;;;;;;;;;;;;;;;;:::o;480:211:7:-;547:12;365:5:5;;;;;;;;;;;351:19;;:10;:19;;;343:28;;;;;;583:1:7;571:8;:13;568:30;;593:5;586:12;;;;568:30;620:8;605:11;;:23;;;;;;;;;;;659:8;635;:20;644:10;635:20;;;;;;;;;;;;;;;;:32;;;;;;;;;;;681:4;674:11;;382:1:5;480:211:7;;;:::o;624:313:5:-;686:12;718:1;711:6;:8;:41;;;;;746:6;723:8;:20;732:10;723:20;;;;;;;;;;;;;;;;:29;711:41;708:77;;;770:5;763:12;;;;708:77;817:6;793:8;:20;802:10;793:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;849:6;832:8;:13;841:3;832:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;875:33;884:10;896:3;901:6;875:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;923:4;916:11;;624:313;;;;;:::o;247:226:7:-;315:12;365:5:5;;;;;;;;;;;351:19;;:10;:19;;;343:28;;;;;;356:1:7;342:10;:15;339:32;;366:5;359:12;;;;339:32;393:10;378:11;;:25;;;;;;;;;;;434:10;410:8;:20;419:10;410:20;;;;;;;;;;;;;;;;:34;;;;;;;;;;;459:4;452:11;;382:1:5;247:226:7;;;:::o;414:134:6:-;487:14;516:10;:18;527:6;516:18;;;;;;;;;;;;;;;:28;535:8;516:28;;;;;;;;;;;;;;;;509:35;;414:134;;;;:::o","source":"pragma solidity ^0.5.0;\r\n\r\nimport './fantasyCoinV2.sol';\r\n\r\ncontract fantasyCoinV3 is fantasyCoinV2{\r\n\r\n\r\n    constructor(uint256 initSupply) fantasyCoinV2 (initSupply) public{\r\n     //we have invoked the contructor for v1, so no need\r\n    }\r\n    function increaseSupply(uint additional) public restricted returns (bool success){\r\n        if(additional <= 0) return false;\r\n    totalSupply += additional;\r\n    balances[msg.sender] += additional;\r\n     return true;\r\n\r\n    }\r\n     function decreaseSupply(uint decrease) public restricted returns  (bool success) {\r\n    if(decrease <= 0) return false;\r\n    totalSupply -= decrease;\r\n    balances[msg.sender] -= decrease;\r\n    return true;\r\n  }\r\n\r\n}","sourcePath":"C:/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV3.sol","ast":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV3.sol","exportedSymbols":{"fantasyCoinV3":[719]},"id":720,"nodeType":"SourceUnit","nodes":[{"id":648,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:7"},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV2.sol","file":"./fantasyCoinV2.sol","id":649,"nodeType":"ImportDirective","scope":720,"sourceUnit":647,"src":"27:29:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":650,"name":"fantasyCoinV2","nodeType":"UserDefinedTypeName","referencedDeclaration":646,"src":"86:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_fantasyCoinV2_$646","typeString":"contract fantasyCoinV2"}},"id":651,"nodeType":"InheritanceSpecifier","src":"86:13:7"}],"contractDependencies":[493,646],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":719,"linearizedBaseContracts":[719,646,493],"name":"fantasyCoinV3","nodeType":"ContractDefinition","nodes":[{"body":{"id":659,"nodeType":"Block","src":"175:66:7","statements":[]},"documentation":null,"id":660,"implemented":true,"kind":"constructor","modifiers":[{"arguments":[{"argumentTypes":null,"id":656,"name":"initSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":653,"src":"157:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":657,"modifierName":{"argumentTypes":null,"id":655,"name":"fantasyCoinV2","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":646,"src":"142:13:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_fantasyCoinV2_$646_$","typeString":"type(contract fantasyCoinV2)"}},"nodeType":"ModifierInvocation","src":"142:26:7"}],"name":"","nodeType":"FunctionDefinition","parameters":{"id":654,"nodeType":"ParameterList","parameters":[{"constant":false,"id":653,"name":"initSupply","nodeType":"VariableDeclaration","scope":660,"src":"122:18:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":652,"name":"uint256","nodeType":"ElementaryTypeName","src":"122:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"121:20:7"},"returnParameters":{"id":658,"nodeType":"ParameterList","parameters":[],"src":"175:0:7"},"scope":719,"src":"110:131:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":688,"nodeType":"Block","src":"328:145:7","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":671,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":669,"name":"additional","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":662,"src":"342:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<=","rightExpression":{"argumentTypes":null,"hexValue":"30","id":670,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"356:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"342:15:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":674,"nodeType":"IfStatement","src":"339:32:7","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":672,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"366:5:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":668,"id":673,"nodeType":"Return","src":"359:12:7"}},{"expression":{"argumentTypes":null,"id":677,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":675,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":387,"src":"378:11:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":676,"name":"additional","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":662,"src":"393:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"378:25:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":678,"nodeType":"ExpressionStatement","src":"378:25:7"},{"expression":{"argumentTypes":null,"id":684,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":679,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":393,"src":"410:8:7","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":682,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":680,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"419:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":681,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"419:10:7","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"410:20:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":683,"name":"additional","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":662,"src":"434:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"410:34:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":685,"nodeType":"ExpressionStatement","src":"410:34:7"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":686,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"459:4:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":668,"id":687,"nodeType":"Return","src":"452:11:7"}]},"documentation":null,"id":689,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":665,"modifierName":{"argumentTypes":null,"id":664,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":404,"src":"295:10:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"295:10:7"}],"name":"increaseSupply","nodeType":"FunctionDefinition","parameters":{"id":663,"nodeType":"ParameterList","parameters":[{"constant":false,"id":662,"name":"additional","nodeType":"VariableDeclaration","scope":689,"src":"271:15:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":661,"name":"uint","nodeType":"ElementaryTypeName","src":"271:4:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"270:17:7"},"returnParameters":{"id":668,"nodeType":"ParameterList","parameters":[{"constant":false,"id":667,"name":"success","nodeType":"VariableDeclaration","scope":689,"src":"315:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":666,"name":"bool","nodeType":"ElementaryTypeName","src":"315:4:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"314:14:7"},"scope":719,"src":"247:226:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":717,"nodeType":"Block","src":"561:130:7","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":700,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":698,"name":"decrease","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"571:8:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<=","rightExpression":{"argumentTypes":null,"hexValue":"30","id":699,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"583:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"571:13:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":703,"nodeType":"IfStatement","src":"568:30:7","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":701,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"593:5:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":697,"id":702,"nodeType":"Return","src":"586:12:7"}},{"expression":{"argumentTypes":null,"id":706,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":704,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":387,"src":"605:11:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":705,"name":"decrease","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"620:8:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"605:23:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":707,"nodeType":"ExpressionStatement","src":"605:23:7"},{"expression":{"argumentTypes":null,"id":713,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":708,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":393,"src":"635:8:7","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":711,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":709,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"644:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":710,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"644:10:7","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"635:20:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":712,"name":"decrease","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"659:8:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"635:32:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":714,"nodeType":"ExpressionStatement","src":"635:32:7"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":715,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"681:4:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":697,"id":716,"nodeType":"Return","src":"674:11:7"}]},"documentation":null,"id":718,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":694,"modifierName":{"argumentTypes":null,"id":693,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":404,"src":"526:10:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"526:10:7"}],"name":"decreaseSupply","nodeType":"FunctionDefinition","parameters":{"id":692,"nodeType":"ParameterList","parameters":[{"constant":false,"id":691,"name":"decrease","nodeType":"VariableDeclaration","scope":718,"src":"504:13:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":690,"name":"uint","nodeType":"ElementaryTypeName","src":"504:4:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"503:15:7"},"returnParameters":{"id":697,"nodeType":"ParameterList","parameters":[{"constant":false,"id":696,"name":"success","nodeType":"VariableDeclaration","scope":718,"src":"547:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":695,"name":"bool","nodeType":"ElementaryTypeName","src":"547:4:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"546:14:7"},"scope":719,"src":"480:211:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":720,"src":"60:636:7"}],"src":"0:696:7"},"legacyAST":{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV3.sol","exportedSymbols":{"fantasyCoinV3":[719]},"id":720,"nodeType":"SourceUnit","nodes":[{"id":648,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:7"},{"absolutePath":"/C/Users/Solut/Google Drive/work2/projects/fantasyCoin1.2/contracts/fantasyCoinV2.sol","file":"./fantasyCoinV2.sol","id":649,"nodeType":"ImportDirective","scope":720,"sourceUnit":647,"src":"27:29:7","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":650,"name":"fantasyCoinV2","nodeType":"UserDefinedTypeName","referencedDeclaration":646,"src":"86:13:7","typeDescriptions":{"typeIdentifier":"t_contract$_fantasyCoinV2_$646","typeString":"contract fantasyCoinV2"}},"id":651,"nodeType":"InheritanceSpecifier","src":"86:13:7"}],"contractDependencies":[493,646],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":719,"linearizedBaseContracts":[719,646,493],"name":"fantasyCoinV3","nodeType":"ContractDefinition","nodes":[{"body":{"id":659,"nodeType":"Block","src":"175:66:7","statements":[]},"documentation":null,"id":660,"implemented":true,"kind":"constructor","modifiers":[{"arguments":[{"argumentTypes":null,"id":656,"name":"initSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":653,"src":"157:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"id":657,"modifierName":{"argumentTypes":null,"id":655,"name":"fantasyCoinV2","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":646,"src":"142:13:7","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_fantasyCoinV2_$646_$","typeString":"type(contract fantasyCoinV2)"}},"nodeType":"ModifierInvocation","src":"142:26:7"}],"name":"","nodeType":"FunctionDefinition","parameters":{"id":654,"nodeType":"ParameterList","parameters":[{"constant":false,"id":653,"name":"initSupply","nodeType":"VariableDeclaration","scope":660,"src":"122:18:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":652,"name":"uint256","nodeType":"ElementaryTypeName","src":"122:7:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"121:20:7"},"returnParameters":{"id":658,"nodeType":"ParameterList","parameters":[],"src":"175:0:7"},"scope":719,"src":"110:131:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":688,"nodeType":"Block","src":"328:145:7","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":671,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":669,"name":"additional","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":662,"src":"342:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<=","rightExpression":{"argumentTypes":null,"hexValue":"30","id":670,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"356:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"342:15:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":674,"nodeType":"IfStatement","src":"339:32:7","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":672,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"366:5:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":668,"id":673,"nodeType":"Return","src":"359:12:7"}},{"expression":{"argumentTypes":null,"id":677,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":675,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":387,"src":"378:11:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":676,"name":"additional","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":662,"src":"393:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"378:25:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":678,"nodeType":"ExpressionStatement","src":"378:25:7"},{"expression":{"argumentTypes":null,"id":684,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":679,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":393,"src":"410:8:7","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":682,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":680,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"419:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":681,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"419:10:7","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"410:20:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":683,"name":"additional","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":662,"src":"434:10:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"410:34:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":685,"nodeType":"ExpressionStatement","src":"410:34:7"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":686,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"459:4:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":668,"id":687,"nodeType":"Return","src":"452:11:7"}]},"documentation":null,"id":689,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":665,"modifierName":{"argumentTypes":null,"id":664,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":404,"src":"295:10:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"295:10:7"}],"name":"increaseSupply","nodeType":"FunctionDefinition","parameters":{"id":663,"nodeType":"ParameterList","parameters":[{"constant":false,"id":662,"name":"additional","nodeType":"VariableDeclaration","scope":689,"src":"271:15:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":661,"name":"uint","nodeType":"ElementaryTypeName","src":"271:4:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"270:17:7"},"returnParameters":{"id":668,"nodeType":"ParameterList","parameters":[{"constant":false,"id":667,"name":"success","nodeType":"VariableDeclaration","scope":689,"src":"315:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":666,"name":"bool","nodeType":"ElementaryTypeName","src":"315:4:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"314:14:7"},"scope":719,"src":"247:226:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":717,"nodeType":"Block","src":"561:130:7","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":700,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":698,"name":"decrease","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"571:8:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<=","rightExpression":{"argumentTypes":null,"hexValue":"30","id":699,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"583:1:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"571:13:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":703,"nodeType":"IfStatement","src":"568:30:7","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":701,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"593:5:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":697,"id":702,"nodeType":"Return","src":"586:12:7"}},{"expression":{"argumentTypes":null,"id":706,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":704,"name":"totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":387,"src":"605:11:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":705,"name":"decrease","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"620:8:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"605:23:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":707,"nodeType":"ExpressionStatement","src":"605:23:7"},{"expression":{"argumentTypes":null,"id":713,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":708,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":393,"src":"635:8:7","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":711,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":709,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":817,"src":"644:3:7","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":710,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"644:10:7","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"635:20:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":712,"name":"decrease","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":691,"src":"659:8:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"635:32:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":714,"nodeType":"ExpressionStatement","src":"635:32:7"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":715,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"681:4:7","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":697,"id":716,"nodeType":"Return","src":"674:11:7"}]},"documentation":null,"id":718,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":694,"modifierName":{"argumentTypes":null,"id":693,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":404,"src":"526:10:7","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"526:10:7"}],"name":"decreaseSupply","nodeType":"FunctionDefinition","parameters":{"id":692,"nodeType":"ParameterList","parameters":[{"constant":false,"id":691,"name":"decrease","nodeType":"VariableDeclaration","scope":718,"src":"504:13:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":690,"name":"uint","nodeType":"ElementaryTypeName","src":"504:4:7","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"503:15:7"},"returnParameters":{"id":697,"nodeType":"ParameterList","parameters":[{"constant":false,"id":696,"name":"success","nodeType":"VariableDeclaration","scope":718,"src":"547:12:7","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":695,"name":"bool","nodeType":"ElementaryTypeName","src":"547:4:7","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"546:14:7"},"scope":719,"src":"480:211:7","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":720,"src":"60:636:7"}],"src":"0:696:7"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.11","updatedAt":"2019-06-20T19:07:46.826Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./feedback.module": [
		"./src/app/app-routing/feedback.module.ts",
		"feedback-module"
	],
	"./home.module": [
		"./src/app/app-routing/home.module.ts",
		"home-module"
	],
	"./leagues.module": [
		"./src/app/app-routing/leagues.module.ts",
		"leagues-module"
	],
	"./login.module": [
		"./src/app/app-routing/login.module.ts",
		"login-module"
	],
	"./new-team.module": [
		"./src/app/app-routing/new-team.module.ts",
		"default~new-team-module~transfer-module",
		"new-team-module"
	],
	"./ranking.module": [
		"./src/app/app-routing/ranking.module.ts",
		"ranking-module"
	],
	"./team.module": [
		"./src/app/app-routing/team.module.ts",
		"team-module"
	],
	"./transfer.module": [
		"./src/app/app-routing/transfer.module.ts",
		"default~new-team-module~transfer-module",
		"transfer-module"
	],
	"./user-team-page.module": [
		"./src/app/app-routing/user-team-page.module.ts",
		"user-team-page-module"
	],
	"./welcome.module": [
		"./src/app/app-routing/welcome.module.ts",
		"welcome-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/active.guard.ts":
/*!*********************************!*\
  !*** ./src/app/active.guard.ts ***!
  \*********************************/
/*! exports provided: ActiveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveGuard", function() { return ActiveGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_dialogs_beta_beta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/dialogs/beta/beta.component */ "./src/app/dialogs/beta/beta.component.ts");





var ActiveGuard = /** @class */ (function () {
    function ActiveGuard(auth, dialog) {
        this.auth = auth;
        this.dialog = dialog;
    }
    ActiveGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isActive()) {
            return true;
        }
        else {
            this.dialog.open(_app_dialogs_beta_beta_component__WEBPACK_IMPORTED_MODULE_4__["BetaComponent"]);
            return false;
        }
    };
    ActiveGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ActiveGuard);
    return ActiveGuard;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





var routes = [
    { path: '', loadChildren: './welcome.module#WelcomeModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap\");\n.body {\n  font-family: 'Old Standard TT', serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTb2x1dFxcR29vZ2xlIERyaXZlXFx3b3JrMlxccHJvamVjdHNcXGZhbnRhc3lDb2luMS4yL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQVk7QUFFWjtFQUNJLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PbGQrU3RhbmRhcmQrVFQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT2xkIFN0YW5kYXJkIFRUJywgc2VyaWY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var _shared_restangular_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/restangular.config */ "./src/app/shared/restangular.config.ts");
/* harmony import */ var _dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/remove-player/remove-player.component */ "./src/app/dialogs/remove-player/remove-player.component.ts");
/* harmony import */ var _dialogs_unlock_metamask_unlock_metamask_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/unlock-metamask/unlock-metamask.component */ "./src/app/dialogs/unlock-metamask/unlock-metamask.component.ts");
/* harmony import */ var _dialogs_login_metamask_login_metamask_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/login-metamask/login-metamask.component */ "./src/app/dialogs/login-metamask/login-metamask.component.ts");
/* harmony import */ var _dialogs_install_metamask_install_metamask_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialogs/install-metamask/install-metamask.component */ "./src/app/dialogs/install-metamask/install-metamask.component.ts");
/* harmony import */ var _dialogs_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/create-account/create-account.component */ "./src/app/dialogs/create-account/create-account.component.ts");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _active_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./active.guard */ "./src/app/active.guard.ts");
/* harmony import */ var _dialogs_beta_beta_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialogs/beta/beta.component */ "./src/app/dialogs/beta/beta.component.ts");
/* harmony import */ var _dialogs_warning_beta_warning_beta_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialogs/warning-beta/warning-beta.component */ "./src/app/dialogs/warning-beta/warning-beta.component.ts");
/* harmony import */ var _dialogs_buy_more_buy_more_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialogs/buy-more/buy-more.component */ "./src/app/dialogs/buy-more/buy-more.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_12__["RemovePlayerComponent"], _dialogs_unlock_metamask_unlock_metamask_component__WEBPACK_IMPORTED_MODULE_13__["UnlockMetamaskComponent"], _dialogs_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_16__["CreateAccountComponent"],
                _dialogs_login_metamask_login_metamask_component__WEBPACK_IMPORTED_MODULE_14__["LoginMetamaskComponent"], _dialogs_install_metamask_install_metamask_component__WEBPACK_IMPORTED_MODULE_15__["InstallMetamaskComponent"], _dialogs_beta_beta_component__WEBPACK_IMPORTED_MODULE_21__["BetaComponent"], _dialogs_warning_beta_warning_beta_component__WEBPACK_IMPORTED_MODULE_22__["WarningBetaComponent"], _dialogs_buy_more_buy_more_component__WEBPACK_IMPORTED_MODULE_23__["BuyMoreComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_restangular__WEBPACK_IMPORTED_MODULE_10__["RestangularModule"].forRoot(_shared_restangular_config__WEBPACK_IMPORTED_MODULE_11__["restangularConfigFactory"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ],
            providers: [_util_web3_service__WEBPACK_IMPORTED_MODULE_17__["Web3Service"], _util_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _active_guard__WEBPACK_IMPORTED_MODULE_20__["ActiveGuard"]],
            entryComponents: [_dialogs_remove_player_remove_player_component__WEBPACK_IMPORTED_MODULE_12__["RemovePlayerComponent"], _dialogs_unlock_metamask_unlock_metamask_component__WEBPACK_IMPORTED_MODULE_13__["UnlockMetamaskComponent"], _dialogs_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_16__["CreateAccountComponent"],
                _dialogs_login_metamask_login_metamask_component__WEBPACK_IMPORTED_MODULE_14__["LoginMetamaskComponent"], _dialogs_install_metamask_install_metamask_component__WEBPACK_IMPORTED_MODULE_15__["InstallMetamaskComponent"], _dialogs_warning_beta_warning_beta_component__WEBPACK_IMPORTED_MODULE_22__["WarningBetaComponent"], _dialogs_beta_beta_component__WEBPACK_IMPORTED_MODULE_21__["BetaComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return true;
    };
    AuthGuard.prototype.canLoad = function (route, segments) {
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dialogs/beta/beta.component.html":
/*!**************************************************!*\
  !*** ./src/app/dialogs/beta/beta.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"beta\">\r\n  <article class=\"message is-warning\">\r\n    <div class=\"message-header\">\r\n      <p>Hi <strong>{{userName}}</strong></p>\r\n      <a href=\"/\" class=\"delete\" aria-label=\"delete\"></a>\r\n    </div>\r\n    <div class=\"message-body\">\r\n      Thank you for your interest in fantasy coin. We are in <strong>beta</strong> and are awarding <strong>free</strong> fantasy coins to <strong>selected</strong> users to <strong>test</strong> the platform. <br/>\r\n      Please check your email <p *ngIf=\"userEmail\">{{userEmail}}</p> within 24hrs to confirm if you have been awarded fantasy coins to participate <br/>\r\n      Thank You <br/>\r\n      Dev Team.\r\n    </div>\r\n    <div class=\"message-footer\">\r\n      <div class=\"field is-grouped is-grouped-centered\">\r\n        <p class=\"control\">\r\n          <button class=\"button is-warning\">\r\n           How to Play\r\n          </button>\r\n        </p>\r\n        <p class=\"control\">\r\n          <a class=\"button is-light\" href=\"/\">\r\n            Cancel\r\n          </a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/beta/beta.component.scss":
/*!**************************************************!*\
  !*** ./src/app/dialogs/beta/beta.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvYmV0YS9iZXRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/beta/beta.component.ts":
/*!************************************************!*\
  !*** ./src/app/dialogs/beta/beta.component.ts ***!
  \************************************************/
/*! exports provided: BetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetaComponent", function() { return BetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");




var BetaComponent = /** @class */ (function () {
    function BetaComponent(dialogRef, auth) {
        this.dialogRef = dialogRef;
        this.auth = auth;
    }
    BetaComponent.prototype.ngOnInit = function () {
        this.userName = this.auth.getUserName();
        this.userEmail = this.auth.getUserEmail();
    };
    BetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-beta',
            template: __webpack_require__(/*! ./beta.component.html */ "./src/app/dialogs/beta/beta.component.html"),
            styles: [__webpack_require__(/*! ./beta.component.scss */ "./src/app/dialogs/beta/beta.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _util_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], BetaComponent);
    return BetaComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/buy-more/buy-more.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/buy-more/buy-more.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  buy-more works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dialogs/buy-more/buy-more.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/buy-more/buy-more.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvYnV5LW1vcmUvYnV5LW1vcmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/buy-more/buy-more.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dialogs/buy-more/buy-more.component.ts ***!
  \********************************************************/
/*! exports provided: BuyMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyMoreComponent", function() { return BuyMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuyMoreComponent = /** @class */ (function () {
    function BuyMoreComponent() {
    }
    BuyMoreComponent.prototype.ngOnInit = function () {
    };
    BuyMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buy-more',
            template: __webpack_require__(/*! ./buy-more.component.html */ "./src/app/dialogs/buy-more/buy-more.component.html"),
            styles: [__webpack_require__(/*! ./buy-more.component.scss */ "./src/app/dialogs/buy-more/buy-more.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuyMoreComponent);
    return BuyMoreComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/create-account/create-account.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/create-account/create-account.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"creatForm\" *ngIf=\"showCreate\">\r\n<div class=\"create\">\r\n  <div class=\"myTitle\">\r\n    <p class=\"has-text-primary\">Create Account</p>\r\n \r\n  </div>\r\n  <div class=\"separator\">\r\n\r\n    </div>\r\n    \r\n  <div class=\"myText\">\r\n    <p>\r\n        Your email address is used to send you crucial and account related updates.\r\n        Your nickname is public and is how other users will identify you.\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"spinner button is-loading is-large\" *ngIf=\"showLoading\"></div>\r\n\r\n<div class=\"creationForm\" *ngIf=\"showForm\">\r\n<form class=\"form\" [formGroup]=\"CreatAccountForm\">\r\n    <div class=\"field\">\r\n        <!-- <label class=\"label\">Name</label> -->\r\n        <div class=\"control\">\r\n          <input class=\"input is-medium\" type=\"email\" placeholder=\"e.g AlexSmith@email.com\"\r\n           formControlName=\"email\" [email]=\"true\">\r\n        </div>\r\n        <p class=\"help is-danger\" *ngIf=\"CreatAccountForm.invalid\">This email is invalid</p>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <!-- <label class=\"label\">Email</label> -->\r\n        <div class=\"control\">\r\n          <input class=\"input is-medium\" type=\"text\" placeholder=\"e.g. The one\"\r\n           formControlName=\"username\">\r\n        </div>\r\n        <p class=\"help is-danger\" *ngIf=\"CreatAccountForm.invalid\">Username is required</p>\r\n      </div>\r\n\r\n      <div class=\"field is-grouped create_button\">\r\n          <div class=\"column\">\r\n            <button type=\"button\" class=\"button is-primary is-large is-centered\" (click)=\"submit()\" [disabled]=\"CreatAccountForm.invalid\">Create</button>\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n</form>\r\n<div class=\"separator\">\r\n\r\n  </div>\r\n  <div class=\"terms\">\r\n    <p>by signing up you agree to our terms of service and privacy policy</p>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"signIN\" *ngIf=\"showSignIn\">\r\n    <div class=\"myTitle\">\r\n        <p class=\"has-text-primary\">Sign in</p>\r\n     \r\n      </div>\r\n      <div class=\"separator\">\r\n    \r\n        </div>\r\n        \r\n      <div class=\"myText\">\r\n        <p>\r\n            Almost there! As a final step your wallet will ask you to digitally sign in to link it with Fantasy Coin. Click the button to proceed.\r\n        </p>\r\n      </div>\r\n      <button type=\"button\" class=\"button is-primary\" (click)=\"signIn()\"> Sign in</button>\r\n    </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dialogs/create-account/create-account.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/create-account/create-account.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myTitle {\n  /* border-bottom: rgb(0, 209, 178) solid 1px; */\n  /* margin-bottom: 8px; */\n  text-align: center; }\n\n.myText {\n  margin-bottom: 18px;\n  text-align: center; }\n\n.create {\n  padding: 4px; }\n\nform {\n  margin-top: 18px; }\n\n.create_button {\n  text-align: center;\n  margin-bottom: 8px; }\n\n.separator {\n  margin: 15px;\n  border-bottom: 1px solid #00d1b2;\n  text-align: center; }\n\n.terms {\n  text-align: center; }\n\n.spinner {\n  width: 100%;\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9jcmVhdGUtYWNjb3VudC9DOlxcVXNlcnNcXFNvbHV0XFxHb29nbGUgRHJpdmVcXHdvcmsyXFxwcm9qZWN0c1xcZmFudGFzeUNvaW4xLjIvc3JjXFxhcHBcXGRpYWxvZ3NcXGNyZWF0ZS1hY2NvdW50XFxjcmVhdGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQ0YsRUFBQTs7QUFDQTtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVk7RUFDWixnQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsV0FBVztFQUNYLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY3JlYXRlLWFjY291bnQvY3JlYXRlLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlUaXRsZXtcclxuICAvKiBib3JkZXItYm90dG9tOiByZ2IoMCwgMjA5LCAxNzgpIHNvbGlkIDFweDsgKi9cclxuICAvKiBtYXJnaW4tYm90dG9tOiA4cHg7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5teVRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uY3JlYXRle1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5mb3Jte1xyXG4gIG1hcmdpbi10b3A6MThweDtcclxufVxyXG4uY3JlYXRlX2J1dHRvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbi5zZXBhcmF0b3J7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiKDAsIDIwOSwgMTc4KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXJtc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dialogs/create-account/create-account.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/create-account/create-account.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/api-service.service */ "./src/app/util/api-service.service.ts");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/token.service */ "./src/app/util/token.service.ts");









var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent(dialogRef, fb, web3Service, apiService, authService, router, ref, zone, tokenService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.web3Service = web3Service;
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.zone = zone;
        this.tokenService = tokenService;
    }
    // called when user has account but is not signed in
    CreateAccountComponent.prototype.ngOnInit = function () {
        // console.log('hitting  create account')
        this.showForm = true;
        this.showLoading = true;
        this.showSignIn = false;
        this.showCreate = false;
        this.getBaseAccount();
        this.createForm();
        // this.decideForm()
    };
    // decideForm(){ //check if user is registerd and show appropriate form
    //   console.log('get decide form')
    //   this.showLoading = true;
    //   console.log('register ',this.registered)
    //   if(this.registered){
    //     this.showSignIn = true;
    //   }
    //   else{
    //     this.showCreate= true
    //   }
    // }
    CreateAccountComponent.prototype.createAccount = function () {
        this.getBaseAccount(); //get account address
        this.close();
    };
    CreateAccountComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    // form for creatring new account
    CreateAccountComponent.prototype.createForm = function () {
        this.CreatAccountForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    // gets base accoun and determins which form to show to user 
    CreateAccountComponent.prototype.getBaseAccount = function () {
        var _this = this;
        this.web3Service.getCoinBase()
            .subscribe(function (resp) {
            _this.AccountId = resp;
            _this.checkifRegister(_this.AccountId);
        });
    };
    CreateAccountComponent.prototype.submit = function () {
        var _this = this;
        this.showLoading = true;
        this.ref.detectChanges();
        this.showForm = false;
        this.CreatAccountForm.value.address = this.AccountId;
        this.apiService.postResource('users', this.CreatAccountForm.value)
            .subscribe(function (resp) {
            //console.log('resp from server ', resp)
            _this.user = resp;
            _this.showCreate = false;
            _this.showSignIn = true;
            _this.ref.detectChanges();
        });
    };
    CreateAccountComponent.prototype.signIn = function () {
        var _this = this;
        // signs user in with new Authtoken
        console.log('reso from server ', this.user);
        this.web3Service.signTransaction(this.user)
            .subscribe(function (resp) {
            console.log('signed by ', resp.account);
            _this.apiService.getTokenResource('auth', _this.AccountId, resp.sign, resp.nonce)
                .subscribe(function (resp) {
                _this.authService.setToken(resp.token, resp.userName, resp.userId, resp, resp.address, resp.active, resp.email);
                _this.tokenService.getTokenBalance(_this.AccountId).subscribe(function (resp) {
                    _this.showLoading = true;
                    console.log('responce ni ', resp);
                    _this.authService.isActive();
                    // use zone to take care of issue with ngOninit not firring after navigate
                    _this.zone.run(function () { return _this.router.navigateByUrl('/transfers'); }); // use 
                });
            });
        });
        this.dialogRef.close();
    };
    CreateAccountComponent.prototype.checkifRegister = function (id) {
        var _this = this;
        //console.log('checking if registed', this.AccountId)
        this.apiService.getSpecificResource('users', id)
            .subscribe(function (resp) {
            _this.showLoading = false;
            _this.user = resp;
            _this.showSignIn = true;
        }, function (error) {
            console.log('user NOT Found');
            _this.showLoading = false;
            _this.showCreate = true;
            _this.ref.detectChanges();
        });
    };
    CreateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/dialogs/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.scss */ "./src/app/dialogs/create-account/create-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _util_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"],
            _util_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"],
            _util_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _util_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"]])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/install-metamask/install-metamask.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/install-metamask/install-metamask.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"install_metamask\">\r\n  <div class=\"mytitle\">\r\n    <div class=\"columns\">\r\n      <div class=\"column is-four-fifths\">\r\n          <p class=\"has-text-weight-semibold\">Ready To Play?</p>\r\n          <p>You’ll need a safe place to store all of your Players and Team!</p>\r\n\r\n      </div>\r\n      <div class=\"column\">\r\n        <button (click)=\"close()\" class=\"button\">Done</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"separator\">\r\n\r\n  </div>\r\n  <div class=\"myImage column\">\r\n    <div class=\"is-half\">\r\n    <img src=\"../../assets/images/design/metamask.png\" width=\"400px\" alt=\"metamask\">\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"myText\">\r\n    <p>The perfect place is in a secure wallet like MetaMask.\r\n      This will also act as your login to the game (no extra password needed).</p>\r\n  </div>\r\n  <div class=\"column\">\r\n    <a class=\"button is-large is-fullwidth is-half is-primary\" target=\"blank\" href={{buttonLink}}>\r\n\r\n      <span>{{buttonText}}</span>\r\n    </a>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/install-metamask/install-metamask.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/install-metamask/install-metamask.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".separator {\n  margin: 4px;\n  border-bottom: 1px solid #00d1b2;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9pbnN0YWxsLW1ldGFtYXNrL0M6XFxVc2Vyc1xcU29sdXRcXEdvb2dsZSBEcml2ZVxcd29yazJcXHByb2plY3RzXFxmYW50YXN5Q29pbjEuMi9zcmNcXGFwcFxcZGlhbG9nc1xcaW5zdGFsbC1tZXRhbWFza1xcaW5zdGFsbC1tZXRhbWFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2luc3RhbGwtbWV0YW1hc2svaW5zdGFsbC1tZXRhbWFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmF0b3J7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICByZ2IoMCwgMjA5LCAxNzgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dialogs/install-metamask/install-metamask.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/install-metamask/install-metamask.component.ts ***!
  \************************************************************************/
/*! exports provided: InstallMetamaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallMetamaskComponent", function() { return InstallMetamaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _util_browser_detection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/browser-detection.service */ "./src/app/util/browser-detection.service.ts");




var InstallMetamaskComponent = /** @class */ (function () {
    function InstallMetamaskComponent(browserDetect, dialogRef) {
        this.browserDetect = browserDetect;
        this.dialogRef = dialogRef;
    }
    InstallMetamaskComponent.prototype.ngOnInit = function () {
        this.detect();
        console.log('what is button link? ', this.buttonLink);
    };
    InstallMetamaskComponent.prototype.detect = function () {
        var _this = this;
        var browser;
        this.browserDetect.detectBrowser()
            .subscribe(function (resp) {
            if (resp == 'isOpera') {
                _this.buttonText = "Get Metamask from Opera Store";
                _this.buttonLink = "https://addons.opera.com/en/extensions/details/metamask/";
                _this.buttonImage = "fab fa-opera";
            }
            if (resp == 'isChrome') {
                _this.buttonText = "Get Metamask from Chrome Store";
                _this.buttonLink = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
                _this.buttonImage = "fab fa-chrome";
            }
            if (resp == 'isFireFox') {
                _this.buttonText = "Get Metamask from FireFox Store";
                _this.buttonLink = "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/";
                _this.buttonImage = "fab fa-firefox";
            }
            if (resp == 'unKnown') {
                _this.buttonText = "Get Metamask from Chrome Store";
                _this.buttonLink = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
                _this.buttonImage = "fab fa-chrome";
            }
            if (resp == 'isSafari') {
                _this.buttonText = "Sorry Safari does not support Metamask at the momment. Please use chrome";
                _this.buttonLink = "";
                _this.buttonImage = "fab fa-safari";
            }
        });
    };
    InstallMetamaskComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    InstallMetamaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-install-metamask',
            template: __webpack_require__(/*! ./install-metamask.component.html */ "./src/app/dialogs/install-metamask/install-metamask.component.html"),
            styles: [__webpack_require__(/*! ./install-metamask.component.scss */ "./src/app/dialogs/install-metamask/install-metamask.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_browser_detection_service__WEBPACK_IMPORTED_MODULE_3__["BrowserDetectionService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], InstallMetamaskComponent);
    return InstallMetamaskComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/login-metamask/login-metamask.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/login-metamask/login-metamask.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"button\" (click)=\"login()\">Login</button>\r\n"

/***/ }),

/***/ "./src/app/dialogs/login-metamask/login-metamask.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/login-metamask/login-metamask.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvbG9naW4tbWV0YW1hc2svbG9naW4tbWV0YW1hc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/login-metamask/login-metamask.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/login-metamask/login-metamask.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginMetamaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMetamaskComponent", function() { return LoginMetamaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/api-service.service */ "./src/app/util/api-service.service.ts");
/* harmony import */ var _util_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/token.service */ "./src/app/util/token.service.ts");






var LoginMetamaskComponent = /** @class */ (function () {
    function LoginMetamaskComponent(web3Service, apiService, dialogRef, tokenService, ref) {
        this.web3Service = web3Service;
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.tokenService = tokenService;
        this.ref = ref;
    }
    LoginMetamaskComponent.prototype.ngOnInit = function () {
        this.getCoinBase();
    };
    LoginMetamaskComponent.prototype.getCoinBase = function () {
        var _this = this;
        this.web3Service.getCoinBase()
            .subscribe(function (resp) {
            _this.coinBase = resp;
        });
    };
    LoginMetamaskComponent.prototype.login = function () {
        var _this = this;
        this.apiService.getSpecificResource('auth', this.coinBase)
            .subscribe(function (resp) {
            _this.challenge = resp;
            console.log('what is the resp ', _this.challenge);
            _this.web3Service.signTransaction(_this.challenge)
                .subscribe(function (resp) {
                _this.apiService.getTokenResource('auth', resp.nounce, resp.sign, resp.nonce)
                    .subscribe(function (resp) {
                    console.log('am i geting token ', resp);
                    _this.tokenService.getTokenBalance(_this.coinBase).subscribe();
                });
            });
        });
        this.ref.detectChanges();
        this.close();
    };
    LoginMetamaskComponent.prototype.close = function () {
        this.ref.detectChanges();
        this.dialogRef.close();
    };
    LoginMetamaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-metamask',
            template: __webpack_require__(/*! ./login-metamask.component.html */ "./src/app/dialogs/login-metamask/login-metamask.component.html"),
            styles: [__webpack_require__(/*! ./login-metamask.component.scss */ "./src/app/dialogs/login-metamask/login-metamask.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"],
            _util_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _util_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoginMetamaskComponent);
    return LoginMetamaskComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/remove-player/remove-player.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/remove-player/remove-player.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <header class=\"card-header\">\r\n      <p class=\"card-header-title\">\r\n        Remove Player?\r\n      </p>\r\n      <a (click)=\"close()\" class=\"card-header-icon\" aria-label=\"more options\">\r\n        <span class=\"icon\">\r\n          <i class=\"fas fa-times\" aria-hidden=\"true\" ></i>\r\n        </span>\r\n      </a>\r\n    </header>\r\n    <div class=\"card-content\">\r\n      <div class=\"media\">\r\n        <div class=\"media-left\">\r\n          <figure class=\"image is-48x48\">\r\n            <img [src]= \"'../../assets/images/kits/' + player.team_code + '.png' \"\r\n            alt=\"Player Jersey\">\r\n          </figure>\r\n        </div>\r\n        <div class=\"media-content\">\r\n          <p class=\"title is-4\">{{player.web_name}}</p>\r\n          <p class=\"subtitle is-6\">${{player.now_cost}}</p>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"content\">\r\n        Player already in your team\r\n        <br>\r\n        Do you want to remove this player from your team?\r\n        <br>\r\n  \r\n      </div>\r\n    </div>\r\n    <footer class=\"card-footer\">\r\n      <a class=\"card-footer-item has-background-danger has-text-white\" (click)=\"removePlayer(player)\">Remove</a>\r\n      <a class=\"card-footer-item has-background-light has-text-black\" (click)=\"close('cancel')\">Cancel</a>\r\n  \r\n    </footer>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/dialogs/remove-player/remove-player.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/remove-player/remove-player.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvcmVtb3ZlLXBsYXllci9yZW1vdmUtcGxheWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dialogs/remove-player/remove-player.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/remove-player/remove-player.component.ts ***!
  \******************************************************************/
/*! exports provided: RemovePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePlayerComponent", function() { return RemovePlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _util_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/data.service */ "./src/app/util/data.service.ts");
/* harmony import */ var _util_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/token.service */ "./src/app/util/token.service.ts");





// import { EventEmitter } from 'events';
var RemovePlayerComponent = /** @class */ (function () {
    function RemovePlayerComponent(dialogRef, data, teamData, tokenService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.teamData = teamData;
        this.tokenService = tokenService;
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RemovePlayerComponent.prototype.ngOnInit = function () {
        console.log('what is this> ', this.data.player);
        this.player = this.data.player;
    };
    RemovePlayerComponent.prototype.removePlayer = function (p) {
        // console.log('are we removing' , p)
        // this.teamData.removePlayers(p)
        this.removeEvent.emit(p);
        this.close('remove');
    };
    RemovePlayerComponent.prototype.close = function (p) {
        this.dialogRef.close(p);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RemovePlayerComponent.prototype, "removeEvent", void 0);
    RemovePlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remove-player',
            template: __webpack_require__(/*! ./remove-player.component.html */ "./src/app/dialogs/remove-player/remove-player.component.html"),
            styles: [__webpack_require__(/*! ./remove-player.component.scss */ "./src/app/dialogs/remove-player/remove-player.component.scss")]
        })
        // called by team component and more
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _util_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _util_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], RemovePlayerComponent);
    return RemovePlayerComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/unlock-metamask/unlock-metamask.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/unlock-metamask/unlock-metamask.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"unlock\">\r\n        <div class=\"card\">\r\n                <header class=\"card-header\">\r\n                  <p class=\"card-header-title\">\r\n                   unlock metamask\r\n                  </p>\r\n                  <span class=\"card-header-icon\">\r\n                  <button class=\"button\" (click)=\"close('test')\">cancel</button>\r\n                  </span>\r\n                </header>\r\n                <div class=\"card-content\">\r\n                  <div class=\"content\">\r\n                    <img src=\"../../../assets/images/gifs/unlock-metamask.gif\" alt=\"\">\r\n                    \r\n                  </div>\r\n                </div>\r\n                <!-- <footer class=\"card-footer\">\r\n                  <a href=\"#\" class=\"card-footer-item\">Save</a>\r\n                  <a href=\"#\" class=\"card-footer-item\">Edit</a>\r\n                  <a href=\"#\" class=\"card-footer-item\">Delete</a>\r\n                </footer> -->\r\n              </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/unlock-metamask/unlock-metamask.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/unlock-metamask/unlock-metamask.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvdW5sb2NrLW1ldGFtYXNrL3VubG9jay1tZXRhbWFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/unlock-metamask/unlock-metamask.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/unlock-metamask/unlock-metamask.component.ts ***!
  \**********************************************************************/
/*! exports provided: UnlockMetamaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockMetamaskComponent", function() { return UnlockMetamaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var UnlockMetamaskComponent = /** @class */ (function () {
    function UnlockMetamaskComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    UnlockMetamaskComponent.prototype.ngOnInit = function () {
        console.log('component whats up?');
    };
    UnlockMetamaskComponent.prototype.close = function (kivici) {
        this.dialogRef.close();
        console.log('closing ', kivici);
    };
    UnlockMetamaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unlock-metamask',
            template: __webpack_require__(/*! ./unlock-metamask.component.html */ "./src/app/dialogs/unlock-metamask/unlock-metamask.component.html"),
            styles: [__webpack_require__(/*! ./unlock-metamask.component.scss */ "./src/app/dialogs/unlock-metamask/unlock-metamask.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], UnlockMetamaskComponent);
    return UnlockMetamaskComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/warning-beta/warning-beta.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/warning-beta/warning-beta.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"message is-warning\">\r\n  <div class=\"message-header\">\r\n    <p>Early Beta</p>\r\n    <button class=\"delete\" aria-label=\"delete\" (click)=\"close()\"></button>\r\n  </div>\r\n  <div class=\"message-body is-danger\">\r\n    Thank you for your interest in <strong> fantasy coin</strong>, <br/>\r\n    We are in early Beta. <br/>\r\n    <p class=\"subtitle is-6\"><strong>Things that you should know:</strong><br/></p>\r\n   <ul class=\"list\">\r\n     <li class=\"list-item\">You will be rewarded in fantasy coins for participation in this test</li>\r\n     <li class=\"list-item\">We are continuously adding features, competitions and rewards </li>\r\n     <li class=\"list-item\">We will be randomly generating soccer player scores to determine winners.</li>\r\n     <li class=\"list-item\">We appreciate your feedback</li>\r\n   </ul>\r\n   <p>To continue click <a (click)=\"close()\">Here</a></p>\r\n   <p>Terms and conditions <a (click)=\"close()\">ReadMore</a></p>\r\n  </div>\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/dialogs/warning-beta/warning-beta.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/warning-beta/warning-beta.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3Mvd2FybmluZy1iZXRhL3dhcm5pbmctYmV0YS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dialogs/warning-beta/warning-beta.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/warning-beta/warning-beta.component.ts ***!
  \****************************************************************/
/*! exports provided: WarningBetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningBetaComponent", function() { return WarningBetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/auth.service */ "./src/app/util/auth.service.ts");




var WarningBetaComponent = /** @class */ (function () {
    function WarningBetaComponent(dialogRef, ref, auth) {
        this.dialogRef = dialogRef;
        this.ref = ref;
        this.auth = auth;
    }
    WarningBetaComponent.prototype.ngOnInit = function () {
        this.ref.detectChanges();
    };
    WarningBetaComponent.prototype.close = function () {
        this.auth.setNewUser();
        this.dialogRef.close();
    };
    WarningBetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warning-beta',
            template: __webpack_require__(/*! ./warning-beta.component.html */ "./src/app/dialogs/warning-beta/warning-beta.component.html"),
            styles: [__webpack_require__(/*! ./warning-beta.component.scss */ "./src/app/dialogs/warning-beta/warning-beta.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _util_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], WarningBetaComponent);
    return WarningBetaComponent;
}());



/***/ }),

/***/ "./src/app/shared/address.ts":
/*!***********************************!*\
  !*** ./src/app/shared/address.ts ***!
  \***********************************/
/*! exports provided: Factory, League, Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factory", function() { return Factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "League", function() { return League; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
var Factory = "0x7f6f196a54b2a66aa4be011950813557457eb39f";
var League = "0x337A5b1bBb3d143389f887356F0950E4f0095a93";
var Token = "0x86fcab7ceb23df9f616160ae78947b811b10bd62";


/***/ }),

/***/ "./src/app/shared/restangular.config.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/restangular.config.ts ***!
  \**********************************************/
/*! exports provided: restangularConfigFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restangularConfigFactory", function() { return restangularConfigFactory; });
// const FFCApi ='https://ffc-server.herokuapp.com/api/';
// const FFCLocal ='http://localhost:3000/api/'
// const playerLocal = 'http://localhost:3000/api/players'
var FFCApi = 'https://ffc-server.herokuapp.com/api/';
var FFCLocal = 'http://localhost:3002/api/';
var playerLocal = 'http://localhost:3002/api/players';
function restangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(FFCLocal);
}


/***/ }),

/***/ "./src/app/util/api-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/util/api-service.service.ts ***!
  \*********************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");



var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(restangular) {
        this.restangular = restangular;
    }
    ApiServiceService.prototype.getResource = function (apiRoute) {
        return this.restangular.all(apiRoute).getList();
    };
    ApiServiceService.prototype.getTeams = function (apiRoute, teamCode) {
        return this.restangular.all(apiRoute).getList({ team_code: teamCode });
    };
    ApiServiceService.prototype.postResource = function (apiRoute, team) {
        return this.restangular.all(apiRoute).post(team);
    };
    // postSpecific(apiRoute, resource, item): Observable<any[]>{
    //   return this.restangular.one(apiRoute, resource).post()
    // }
    ApiServiceService.prototype.postUserTeam = function (apiRoute, LeagueEtherId, item, message) {
        return this.restangular.one(apiRoute, LeagueEtherId).all(item).post(message);
    };
    ApiServiceService.prototype.getUserTeam = function (apiRoute, LeagueEtherId, item) {
        return this.restangular.one(apiRoute, LeagueEtherId).all(item).getList();
    };
    ApiServiceService.prototype.getSpecificResource = function (apiRoute, id) {
        return this.restangular.one(apiRoute, id).get();
    };
    ApiServiceService.prototype.getTokenResource = function (apiRoute, id, sign, nonce) {
        console.log('received ', apiRoute, id, '/', sign);
        return this.restangular.one(apiRoute, id).one(sign, nonce).get();
    };
    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/util/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.storageKey = 'fantasy-coin-jwt';
        this.userName = 'userName';
        this.userId = "userid";
        this.user = 'user';
        this.userAdress = 'address';
        this.mydate = 'mydate';
        this.newUser = 'newUser';
        this.myDates = [];
    }
    AuthService.prototype.setToken = function (token, userName, userId, user, address, active, email) {
        localStorage.setItem(this.storageKey, token);
        localStorage.setItem(this.userName, userName);
        localStorage.setItem(this.userId, userId);
        localStorage.setItem(this.userAdress, address);
        localStorage.setItem(this.active, active);
        this.userEmail = email;
        // localStorage.setItem(this.user, JSON.stringify(user))
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(this.storageKey);
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem(this.userId);
    };
    AuthService.prototype.getActiveStatus = function () {
        return localStorage.getItem(this.active);
    };
    AuthService.prototype.getUserEmail = function () {
        return this.userEmail;
    };
    AuthService.prototype.isActive = function () {
        if (this.getActiveStatus() !== 'false') {
            console.log('user is active');
            return true;
        }
        else {
            console.log('user is not active');
            return false;
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getToken() !== null;
    };
    AuthService.prototype.getUserName = function () {
        return localStorage.getItem(this.userName);
    };
    AuthService.prototype.getUserObj = function () {
        return localStorage.getItem(this.user);
    };
    AuthService.prototype.getUserAdress = function () {
        return localStorage.getItem(this.userAdress);
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.userName);
        localStorage.removeItem(this.userId);
        localStorage.removeItem(this.userAdress);
        this.router.navigate(['/']);
    };
    AuthService.prototype.setNewUser = function () {
        localStorage.setItem(this.newUser, 'false');
    };
    AuthService.prototype.getNewUser = function () {
        return localStorage.getItem(this.newUser);
    };
    AuthService.prototype.checkExpiration = function () {
        var myHour = new Date();
        myHour.setHours(myHour.getHours() + 1);
        this.myDates.push(myHour);
        localStorage.setItem(this.mydate, JSON.stringify(this.myDates));
        function confirmExporation() {
            var values = JSON.parse(localStorage.getItem('mydate'));
            console.log('values ', values[0]);
            if (values[0] < new Date()) {
                localStorage.removeItem("mydate");
                console.log('removed item');
                this.logout();
            }
        }
        confirmExporation();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/util/browser-detection.service.ts":
/*!***************************************************!*\
  !*** ./src/app/util/browser-detection.service.ts ***!
  \***************************************************/
/*! exports provided: BrowserDetectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserDetectionService", function() { return BrowserDetectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// declare var window: any;
var BrowserDetectionService = /** @class */ (function () {
    function BrowserDetectionService() {
    }
    BrowserDetectionService.prototype.detectBrowser = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if ((!!window['opr'] && !!window['opr'].addons) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0) {
                observer.next('isOpera');
                observer.complete();
            }
            if (typeof window['InstallTrigger'] !== 'undefined') {
                observer.next('isFireFox');
                observer.complete();
            }
            if (!window['safari'] || window['safari'].pushNotification) {
                observer.next('isSafari');
                observer.complete();
            }
            if (!!window['chrome'] && !!window['chrome']['webstore']) {
                observer.next('isChrome');
                observer.complete();
            }
            else {
                observer.next('unKnown');
                observer.complete();
            }
        });
    };
    BrowserDetectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserDetectionService);
    return BrowserDetectionService;
}());



/***/ }),

/***/ "./src/app/util/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/util/token.service.ts");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-service.service */ "./src/app/util/api-service.service.ts");




var DataService = /** @class */ (function () {
    function DataService(tokenService, api) {
        this.tokenService = tokenService;
        this.api = api;
        this.players = 'players';
        this.userPlayers = [];
        this.userPlayerId = [];
        this.userPlayersOldId = [];
    }
    DataService.prototype.addPlayers = function (player) {
        this.userPlayers.push(player);
        this.userPlayerId.push(player._id);
        //localStorage.setItem(this.players, JSON.stringify(this.userPlayers));
    };
    DataService.prototype.getPlayers = function () {
        return this.userPlayers;
    };
    DataService.prototype.getUserPlayerSize = function () {
        return this.userPlayers.length;
    };
    DataService.prototype.removePlayers = function (id) {
        console.log('removing in service ', id);
        var index = this.userPlayers.indexOf(id);
        console.log('index are you removing ', index);
        this.userPlayers.splice(index, 1);
        // localStorage.setItem(this.players, JSON.stringify(this.userPlayers));
    };
    DataService.prototype.checkIfAlreadyInTeam = function (player) {
        if (this.userPlayerId.indexOf(player._id) == -1) {
            // console.log('not in team add')
            return false;
        }
        else {
            // console.log('in team, remove')
            return true;
        }
    };
    DataService.prototype.setUserBalance = function (balance) {
        this.tokenService.getTokenBalance('takatak')
            .subscribe();
    };
    DataService.prototype.checkTeamsize = function () {
        if (this.userPlayers.length == 11) {
            return true;
        }
        else {
            return false;
        }
    };
    DataService.prototype.reset = function () {
        this.userPlayers = [];
    };
    // transfers
    DataService.prototype.setUserTeam = function (team) {
        var _this = this;
        team.forEach(function (element) {
            _this.userPlayerId.push(element._id);
            _this.userPlayersOldId.push(element._id);
        });
        this.userPlayers = team;
    };
    DataService.prototype.checkIfTransfers = function () {
        if (this.userPlayerId.sort().toString() == this.userPlayersOldId.sort().toString()) {
            console.log('no changes');
            return false;
        }
        else {
            console.log('some changes');
            return true;
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/util/token.service.ts":
/*!***************************************!*\
  !*** ./src/app/util/token.service.ts ***!
  \***************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/address */ "./src/app/shared/address.ts");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var tokenContract = __webpack_require__(/*! ../../../build/contracts/fantasyCoinV3.json */ "./build/contracts/fantasyCoinV3.json");
var TokenService = /** @class */ (function () {
    function TokenService(web3Service) {
        this.web3Service = web3Service;
    }
    TokenService.prototype.getTokenBalance = function (account) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            var instance = _this.web3Service.createContractInstance(_shared_address__WEBPACK_IMPORTED_MODULE_2__["Token"], tokenContract);
            //console.log('account nayo ', account)
            instance.methods.balanceOf(account).call(function (err, resp) {
                if (err) {
                    observer.next(err);
                }
                else {
                    _this.userBalance = parseInt(resp);
                    //console.log('resp ya token ni? ',resp)
                    observer.next(resp);
                    observer.complete();
                }
            });
        });
    };
    TokenService.prototype.getTokenCount = function () {
        return this.userBalance;
    };
    TokenService.prototype.removeTokenCount = function () {
        this.userBalance = 0;
    };
    TokenService.prototype.reduceTokenCount = function (playerCost) {
        this.userBalance -= playerCost;
    };
    TokenService.prototype.addTokenCount = function (playerCost) {
        console.log('player cons ', playerCost);
        this.userBalance += playerCost;
    };
    TokenService.prototype.enoughTokens = function () {
        // console.log('is it enough?, ', this.userBalance)
        if (this.userBalance < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var account;
var factoryJson = __webpack_require__(/*! ../../../build/contracts/LeagueFactory.json */ "./build/contracts/LeagueFactory.json");
var leagueJson = __webpack_require__(/*! ../../../build/contracts/League.json */ "./build/contracts/League.json");
var compeJson = __webpack_require__(/*! ../../../build/contracts/Competitions.json */ "./build/contracts/Competitions.json");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.checkAndInstatiateWeb3 = function () {
            if (typeof window.web3 !== 'undefined') {
                console.warn('using metamsk detected');
                // Use Mist/MetaMask's provider
                _this.web3 = new Web3(Web3.givenProvider);
                // account = this.getCoinBaseHere();
                // console.log('coinbase ', account)
                // this.getSingleAccount()
                return _this.web3;
            }
            else {
                console.warn('No web3 detected');
                // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
                // needs to be changed to better fall back plan
                // this.web3 = new Web3();
                return null;
            }
        };
        // window.addEventListener('load', (event) => {
        //  this.checkAndInstatiateWeb3();
        //   this.checkMetamask();
        //   this.getSingleAccount();
        this.checkAndInstatiateWeb3();
        this.getCoinBase().subscribe(function (resp) {
            _this.account = resp;
            // this.checkMetamask(this.account).subscribe()
            _this.checkAccountChange(_this.account);
        });
        // });
    }
    Web3Service.prototype.checkAccountChange = function (myaccount) {
        //let account = this.web3.accounts[0]
        if (myaccount) {
            myaccount = myaccount.toLowerCase();
            this.web3.currentProvider.publicConfigStore.on('update', function (responce) {
                var newAccount = responce.selectedAddress;
                //console.log('responce has ',newAccount, ' and accounts ', myaccount)
                if (newAccount !== myaccount) {
                    //  console.log('reload page')
                    //this.tokenService.getTokenBalance(myaccount).subscribe()
                    window.location.reload();
                }
            });
        }
    };
    Web3Service.prototype.checkMetamask = function (account) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (typeof window.web3 !== 'undefined') { //web 3 installed
                //console.log('what is in accounts? ', account)
                if (account) { // if account then metamask is unlocked is unlocked return 2
                    observer.next(2);
                    observer.complete();
                }
                else {
                    observer.next(1); // else not unlocked
                    observer.complete();
                }
            }
            else {
                observer.next(3);
                observer.complete();
            }
        });
    };
    Web3Service.prototype.getCoinBase = function () {
        var _this = this;
        //console.log('calling get accounts')
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.web3.eth.getAccounts(function (err, resp) {
                if (err)
                    observer.next(err);
                //  console.log('resp ', resp)
                observer.next(resp[0]);
                observer.complete();
            });
        });
    };
    Web3Service.prototype.getSingleAccount = function (web3) {
        web3.eth.getAccounts(function (err, resp) {
            //this.account = resp[0];
            return resp;
        });
    };
    Web3Service.prototype.getMyCoinBase = function () {
        var account = this.web3.eth.getAccounts();
        return account;
    };
    Web3Service.prototype.signTransaction = function (nonce) {
        // nounce= this.web3.utils.toHex( nounce.challenge)
        // console.log('received ', nonce)
        var _this = this;
        var nonceValue = nonce.nonce;
        //  console.log('signing nounce ', nonceValue)
        var from = this.account;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.web3.eth.personal.sign(_this.web3.utils.fromUtf8("I am signing my one-time nonce: " + nonceValue), from, function (err, result) {
                if (err) {
                    console.log('error signing the token');
                    observer.next(err);
                }
                else {
                    // console.log('SIGNED ', result)
                    var signedObject = {
                        nonce: nonceValue,
                        sign: result
                    };
                    observer.next(signedObject);
                    observer.complete();
                }
            });
        });
    };
    // create contract instance
    Web3Service.prototype.createContractInstance = function (addr, contractJson) {
        var instance;
        var abi = contractJson.abi;
        instance = new this.web3.eth.Contract(abi, addr);
        //console.log("TCL: createContractInstance -> instance ", instance )
        return instance;
    };
    // all depolyed getLeagues
    Web3Service.prototype.getAllLeagues = function (account, addr, gasToUse) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var instance = _this.createContractInstance(addr, factoryJson);
            var transactionObject = {
                from: account,
                gas: gasToUse
            };
            instance.methods.GetAllLeagues().call(transactionObject, function (err, result) {
                if (err) {
                    observer.error(err);
                }
                else {
                    observer.next(result);
                    observer.complete();
                }
            });
        });
    };
    //get all comeptions in this weeks league
    Web3Service.prototype.getAllCompetions = function (account, addr, gasToUse) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var instance = _this.createContractInstance(addr, leagueJson);
            var transactionObject = {
                from: account,
                gas: gasToUse
            };
            var compe = [];
            instance.methods.getCompetitionCount().call(transactionObject, function (err, result) {
                if (err)
                    throw err;
                if (result < 1) {
                    //console.log('no competitions in this league', result)
                }
                else {
                    //console.log('number of competioins is ', result)
                    for (var index = 0; index < result; index++) {
                        instance.methods.competitions(index).call(transactionObject, function (err, result) {
                            if (err) {
                                observer.error(err);
                            }
                            else {
                                var obj = {
                                    prizeMoney: _this.web3.utils.fromWei(result.prizeMoney, 'ether'),
                                    Title: "10 Ethereum weekend jackpot",
                                    maxPlayers: result.maxPlayers
                                };
                                compe.push(obj);
                            }
                            observer.next(compe);
                            observer.complete();
                        });
                    }
                }
            });
        });
    };
    Web3Service.prototype.joinCompe = function (acc, gas, compeId) {
        var _this = this;
        console.log('acc ', acc);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var transactionObject = {
                from: acc,
                gas: gas
            };
            var instance = _this.createContractInstance(compeId, compeJson);
            instance.methods.joinCompetition().send(transactionObject, function (err, resp) {
                // console.log('this works ', compeId)
                if (err) {
                    observer.error(err);
                }
                else {
                    //  console.log('this also works')
                    observer.next(resp);
                    observer.complete();
                }
            });
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Solut\Google Drive\work2\projects\fantasyCoin1.2\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
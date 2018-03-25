(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

var _render = require("./render");

var _render2 = _interopRequireDefault(_render);

var _startListening = require("./startListening");

var _startListening2 = _interopRequireDefault(_startListening);

var _updateSummary = require("./updateSummary");

var _updateSummary2 = _interopRequireDefault(_updateSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by locker on 3/22/2018.
 */
(0, _startListening2.default)(_data2.default, [_render2.default, _updateSummary2.default], [_data2.default.showData(), _data2.default.statistic()]);
_data2.default.updateProjectById('1', 'resource', ['xp', 'win7', 'DOS']);
console.log(_data2.default.showData());
var pro1 = _data2.default.showData();

var domStr = (0, _render2.default)(pro1);

},{"./data":2,"./render":4,"./startListening":6,"./updateSummary":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by locker on 3/22/2018.
 */
var Data = function () {
    var store = void 0;
    var data = [{
        id: '1',
        data: {
            system: 'windows',
            domian: 'bjstdmngbgr01.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.102',
            url: '/var/lib/cruise-agent',
            resource: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']
        }
    }, {
        id: '2',
        data: {
            system: 'windows',
            domian: 'bjstdmngbgr02.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.103',
            url: '/var/lib/cruise-agent',
            resource: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']
        }
    }, {
        id: '3',
        data: {
            system: 'windows',
            domian: 'bjstdmngbgr03.thoughtworks.com',
            status: 'idle',
            ip: '192.168.1.104',
            url: '/var/lib/cruise-agent',
            resource: ['Firefox', 'Safari', 'Ubuntu', 'Chrome']
        }
    }];
    function Store() {
        this.watcherFlag = false;
        this.showData = function () {
            return data;
        };
        this.getProjectById = function (id) {
            return data.find(function (e) {
                return e.id === id;
            }).data;
        };
        this.updateProjectById = function (id, property, param) {
            var currDataIndex = data.findIndex(function (e) {
                return e.id === id;
            });
            if (currDataIndex >= 0) {
                data[currDataIndex].data[property] = param;
                this.watcherFlag = true;
            } else {
                console.log("property or id not found!");
            }
        };
        this.deleteResource = function (id, resource) {
            var currDataIndex = data.findIndex(function (e) {
                return e.id === id;
            });
            var resIndex = data[currDataIndex].data.resource.indexOf(resource);
            if (resIndex >= 0) {
                data[currDataIndex].data.resource.splice(resIndex, 1);
                this.watcherFlag = true;
            }
        };
        this.addResource = function (id, resourceArr) {
            var currDataIndex = data.findIndex(function (e) {
                return e.id === id;
            });
            var flag = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = resourceArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    var resIndex = data[currDataIndex].data.resource.indexOf(i);
                    if (resIndex < 0 && i !== '') {
                        data[currDataIndex].data.resource.push(i);
                        flag = true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.watcherFlag = flag;
        };
        this.statistic = function () {
            var result = {};
            result.idle = 0;
            result.building = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var i = _step2.value;

                    if (i.data.status == "idle") {
                        result.idle++;
                    } else if (i.data.status == "building") {
                        result.building++;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            console.log(result);
            return result;
        };
    }
    return new Store();
}();
exports.default = Data;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var closeBottomBtn = document.querySelectorAll('.modalButtons div[role=\'button\']');
    var modal = document.getElementById('addResourceModal');
    closeBottomBtn.forEach(function (e) {
        e.onclick = function () {
            modal.style.display = "none";
        };
    });
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
})();

var setModalBeforeShow = function setModalBeforeShow(id, top, left) {
    var addButton = document.querySelector("#addResourceModal #modalAddResource");
    addButton.setAttribute("data-addid", id);
    document.querySelector("#addResourceInput").value = "";
    addButton.onclick = function (event) {
        var id = event.currentTarget.getAttribute("data-addid");
        var string = document.getElementById('addResourceInput').value;
        string = string.replace(/\s/g, '');
        var arr = string.split(',');
        _data2.default.addResource(id, arr);
        document.getElementById('addResourceModal').style.display = 'none';
    };
    var modalContent = document.querySelector("#addResourceModal .modal-content");
    modalContent.style.top = top + 30 + "px";
    modalContent.style.left = left + "px";
};

exports.default = setModalBeforeShow;

},{"./data":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _renderResources = require("./renderResources");

var _renderResources2 = _interopRequireDefault(_renderResources);

var _modal = require("./modal");

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = { idle: '#cce8b5', building: '#fffbb9' };

var render = function render(data) {
    var str = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var i = _step.value;

            var data = i.data;
            var res = (0, _renderResources2.default)(i.id, data.resource);
            var crrNode = "\n        <div class=\"detail-box\" style=\"background-color: " + color[data.status] + "\">\n            <div class=\"icon\"></div>\n            <div class=\"project\">\n                <div class=\"info\">\n                    <span class=\"project-name\">" + data.domian + "</span>\n                    |<span class=\"status\">" + data.status + "</span>\n                    |<span class=\"ip\">" + data.ip + "</span>\n                    |<span class=\"url\">" + data.url + "</span>\n                </div>\n                <div class=\"resources\">\n                    <span class=\"add-resource\">\n                        <span class=\"icon-plus\"></span>\n                        <span class=\"underline\" data-id=\"" + i.id + "\"> Specify Resource</span>\n                    </span>\n                    |<span> Resources: </span>\n                    <span class=\"resource-list\"></span>\n                </div>\n            </div>\n        </div>\n        ";
            var el = document.createElement("div");
            el.innerHTML = crrNode;
            el.querySelector(".underline").addEventListener('click', function (e) {
                var currId = i.id;
                var top = e.currentTarget.offsetTop;
                var left = e.currentTarget.offsetLeft;
                var modal = document.getElementById('addResourceModal');
                (0, _modal2.default)(currId, top, left);
                modal.style.display = "block";
            });
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = res[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _i = _step3.value;

                    el.querySelector(".resource-list").appendChild(_i);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            str.push(el.firstElementChild);
        };

        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    document.querySelector(".details").innerHTML = '';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i2 = _step2.value;

            document.querySelector(".details").appendChild(_i2);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return str;
};

exports.default = render;

},{"./modal":3,"./renderResources":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderResource = function renderResource(id, resources) {
    var str = [];
    var idGetter = function (id) {
        var idChecker = id;
        return function () {
            return idChecker;
        };
    }(id);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var i = _step.value;

            var selected = function (i) {
                var selectedChecher = i;
                return function () {
                    return selectedChecher;
                };
            }(i);
            var curr = "\n            <span class=\"resourceItem\">\n                " + i + " <span class=\"icon-close\" data-id=\"" + id + "\"></span>\n            </span>\n        ";
            var el = document.createElement("div");
            el.innerHTML = curr;
            el.firstElementChild.addEventListener('click', function () {
                var idResult = idGetter();
                var resourceResult = selected();
                _data2.default.deleteResource(idResult, resourceResult);
                console.log(idResult + resourceResult);
                console.log(_data2.default.showData());
            });
            str.push(el.firstElementChild);
        };

        for (var _iterator = resources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return str;
};

exports.default = renderResource;

},{"./data":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var watchFlag = function watchFlag(obj, funcArr, paramArr) {
    if (funcArr.length !== paramArr.length) {
        return undefined;
    }
    Object.defineProperty(obj, 'watcherFlag', {
        set: function set(val) {
            if (val === true) {
                for (var i = 0; i < funcArr.length; i++) {
                    funcArr[i](paramArr[i]);
                }
                console.log(obj.watchFlag);
                obj.watchFlag = false;
            }
        }
    });
};

exports.default = watchFlag;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateSummary = function updateSummary(res) {
    if (typeof res['idle'] === "number" && typeof res['building'] === "number") {
        document.querySelector("#idle-count").innerHTML = res['idle'];
        document.querySelector("#building-count").innerHTML = res['building'];
    }
};

exports.default = updateSummary;

},{}]},{},[1])

//# sourceMappingURL=maps/app.js.map

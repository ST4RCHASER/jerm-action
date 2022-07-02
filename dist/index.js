require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 536:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(186));
const run_1 = __nccwpck_require__(995);
const main = async () => {
    await (0, run_1.run)({ path: core.getInput('path') });
};
main().catch((e) => core.setFailed(e instanceof Error ? e.message : JSON.stringify(e)));


/***/ }),

/***/ 995:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = void 0;
const core = __importStar(__nccwpck_require__(186));
const fs_1 = __nccwpck_require__(147);
const ignore_walk_1 = __importDefault(__nccwpck_require__(296));
// eslint-disable-next-line @typescript-eslint/require-await
const run = async (input) => {
    try {
        const files = await fs_1.promises.readdir('./');
        core.info(`Files: ${JSON.stringify(files)}`);
        core.info(`pwd: ${process.cwd()}`);
        await (0, ignore_walk_1.default)({ path: input.path, includeEmpty: false }).then((results) => {
            core.info(`Results: ${JSON.stringify(results)}`);
        }).catch((e) => {
            core.setFailed(e instanceof Error ? e.message : JSON.stringify(e));
        }).finally(() => {
            core.info('Done');
        });
        // //recursively walk the directory
        // const walk = async (dir: string): Promise<void> => {
        //   const files = await fs.readdir(dir)
        //   for (const file of files) {
        //     const path = path.join(dir, file)
        //     const stat = await fs.stat(path)
        //     if (stat.isDirectory()) {
        //       await walk(path)
        //     } else {
        //       core.info(`${path}`)
        //     }
        //   }
        // }
        // await walk(input.path)
        // core.setOutput('files', files.join(', '))
    }
    catch (err) {
        console.error(err);
    }
};
exports.run = run;


/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(278);
const os = __importStar(__nccwpck_require__(37));
const path = __importStar(__nccwpck_require__(17));
const oidc_utils_1 = __nccwpck_require__(41);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(147));
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 41:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(255);
const auth_1 = __nccwpck_require__(526);
const core_1 = __nccwpck_require__(186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(17));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(37);
const fs_1 = __nccwpck_require__(147);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 526:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(685));
const https = __importStar(__nccwpck_require__(687));
const pm = __importStar(__nccwpck_require__(835));
const tunnel = __importStar(__nccwpck_require__(294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ 296:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const fs = __nccwpck_require__(147)
const path = __nccwpck_require__(17)
const EE = (__nccwpck_require__(361).EventEmitter)
const Minimatch = (__nccwpck_require__(276).Minimatch)

class Walker extends EE {
  constructor (opts) {
    opts = opts || {}
    super(opts)
    // set to true if this.path is a symlink, whether follow is true or not
    this.isSymbolicLink = opts.isSymbolicLink
    this.path = opts.path || process.cwd()
    this.basename = path.basename(this.path)
    this.ignoreFiles = opts.ignoreFiles || ['.ignore']
    this.ignoreRules = {}
    this.parent = opts.parent || null
    this.includeEmpty = !!opts.includeEmpty
    this.root = this.parent ? this.parent.root : this.path
    this.follow = !!opts.follow
    this.result = this.parent ? this.parent.result : new Set()
    this.entries = null
    this.sawError = false
  }

  sort (a, b) {
    return a.localeCompare(b, 'en')
  }

  emit (ev, data) {
    let ret = false
    if (!(this.sawError && ev === 'error')) {
      if (ev === 'error') {
        this.sawError = true
      } else if (ev === 'done' && !this.parent) {
        data = Array.from(data)
          .map(e => /^@/.test(e) ? `./${e}` : e).sort(this.sort)
        this.result = data
      }

      if (ev === 'error' && this.parent) {
        ret = this.parent.emit('error', data)
      } else {
        ret = super.emit(ev, data)
      }
    }
    return ret
  }

  start () {
    fs.readdir(this.path, (er, entries) =>
      er ? this.emit('error', er) : this.onReaddir(entries))
    return this
  }

  isIgnoreFile (e) {
    return e !== '.' &&
      e !== '..' &&
      this.ignoreFiles.indexOf(e) !== -1
  }

  onReaddir (entries) {
    this.entries = entries
    if (entries.length === 0) {
      if (this.includeEmpty) {
        this.result.add(this.path.slice(this.root.length + 1))
      }
      this.emit('done', this.result)
    } else {
      const hasIg = this.entries.some(e =>
        this.isIgnoreFile(e))

      if (hasIg) {
        this.addIgnoreFiles()
      } else {
        this.filterEntries()
      }
    }
  }

  addIgnoreFiles () {
    const newIg = this.entries
      .filter(e => this.isIgnoreFile(e))

    let igCount = newIg.length
    const then = _ => {
      if (--igCount === 0) {
        this.filterEntries()
      }
    }

    newIg.forEach(e => this.addIgnoreFile(e, then))
  }

  addIgnoreFile (file, then) {
    const ig = path.resolve(this.path, file)
    fs.readFile(ig, 'utf8', (er, data) =>
      er ? this.emit('error', er) : this.onReadIgnoreFile(file, data, then))
  }

  onReadIgnoreFile (file, data, then) {
    const mmopt = {
      matchBase: true,
      dot: true,
      flipNegate: true,
      nocase: true,
    }
    const rules = data.split(/\r?\n/)
      .filter(line => !/^#|^$/.test(line.trim()))
      .map(rule => {
        return new Minimatch(rule.trim(), mmopt)
      })

    this.ignoreRules[file] = rules

    then()
  }

  filterEntries () {
    // at this point we either have ignore rules, or just inheriting
    // this exclusion is at the point where we know the list of
    // entries in the dir, but don't know what they are.  since
    // some of them *might* be directories, we have to run the
    // match in dir-mode as well, so that we'll pick up partials
    // of files that will be included later.  Anything included
    // at this point will be checked again later once we know
    // what it is.
    const filtered = this.entries.map(entry => {
      // at this point, we don't know if it's a dir or not.
      const passFile = this.filterEntry(entry)
      const passDir = this.filterEntry(entry, true)
      return (passFile || passDir) ? [entry, passFile, passDir] : false
    }).filter(e => e)

    // now we stat them all
    // if it's a dir, and passes as a dir, then recurse
    // if it's not a dir, but passes as a file, add to set
    let entryCount = filtered.length
    if (entryCount === 0) {
      this.emit('done', this.result)
    } else {
      const then = _ => {
        if (--entryCount === 0) {
          this.emit('done', this.result)
        }
      }
      filtered.forEach(filt => {
        const entry = filt[0]
        const file = filt[1]
        const dir = filt[2]
        this.stat({ entry, file, dir }, then)
      })
    }
  }

  onstat ({ st, entry, file, dir, isSymbolicLink }, then) {
    const abs = this.path + '/' + entry
    if (!st.isDirectory()) {
      if (file) {
        this.result.add(abs.slice(this.root.length + 1))
      }
      then()
    } else {
      // is a directory
      if (dir) {
        this.walker(entry, { isSymbolicLink }, then)
      } else {
        then()
      }
    }
  }

  stat ({ entry, file, dir }, then) {
    const abs = this.path + '/' + entry
    fs.lstat(abs, (lstatErr, lstatResult) => {
      if (lstatErr) {
        this.emit('error', lstatErr)
      } else {
        const isSymbolicLink = lstatResult.isSymbolicLink()
        if (this.follow && isSymbolicLink) {
          fs.stat(abs, (statErr, statResult) => {
            if (statErr) {
              this.emit('error', statErr)
            } else {
              this.onstat({ st: statResult, entry, file, dir, isSymbolicLink }, then)
            }
          })
        } else {
          this.onstat({ st: lstatResult, entry, file, dir, isSymbolicLink }, then)
        }
      }
    })
  }

  walkerOpt (entry, opts) {
    return {
      path: this.path + '/' + entry,
      parent: this,
      ignoreFiles: this.ignoreFiles,
      follow: this.follow,
      includeEmpty: this.includeEmpty,
      ...opts,
    }
  }

  walker (entry, opts, then) {
    new Walker(this.walkerOpt(entry, opts)).on('done', then).start()
  }

  filterEntry (entry, partial) {
    let included = true

    // this = /a/b/c
    // entry = d
    // parent /a/b sees c/d
    if (this.parent && this.parent.filterEntry) {
      var pt = this.basename + '/' + entry
      included = this.parent.filterEntry(pt, partial)
    }

    this.ignoreFiles.forEach(f => {
      if (this.ignoreRules[f]) {
        this.ignoreRules[f].forEach(rule => {
          // negation means inclusion
          // so if it's negated, and already included, no need to check
          // likewise if it's neither negated nor included
          if (rule.negate !== included) {
            // first, match against /foo/bar
            // then, against foo/bar
            // then, in the case of partials, match with a /
            const match = rule.match('/' + entry) ||
              rule.match(entry) ||
              (!!partial && (
                rule.match('/' + entry + '/') ||
                rule.match(entry + '/'))) ||
              (!!partial && rule.negate && (
                rule.match('/' + entry, true) ||
                rule.match(entry, true)))

            if (match) {
              included = rule.negate
            }
          }
        })
      }
    })

    return included
  }
}

class WalkerSync extends Walker {
  start () {
    this.onReaddir(fs.readdirSync(this.path))
    return this
  }

  addIgnoreFile (file, then) {
    const ig = path.resolve(this.path, file)
    this.onReadIgnoreFile(file, fs.readFileSync(ig, 'utf8'), then)
  }

  stat ({ entry, file, dir }, then) {
    const abs = this.path + '/' + entry
    let st = fs.lstatSync(abs)
    const isSymbolicLink = st.isSymbolicLink()
    if (this.follow && isSymbolicLink) {
      st = fs.statSync(abs)
    }

    // console.error('STAT SYNC', {st, entry, file, dir, isSymbolicLink, then})
    this.onstat({ st, entry, file, dir, isSymbolicLink }, then)
  }

  walker (entry, opts, then) {
    new WalkerSync(this.walkerOpt(entry, opts)).start()
    then()
  }
}

const walk = (opts, callback) => {
  const p = new Promise((resolve, reject) => {
    new Walker(opts).on('done', resolve).on('error', reject).start()
  })
  return callback ? p.then(res => callback(null, res), callback) : p
}

const walkSync = opts => new WalkerSync(opts).start().result

module.exports = walk
walk.sync = walkSync
walk.Walker = Walker
walk.WalkerSync = WalkerSync


/***/ }),

/***/ 557:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var balanced = __nccwpck_require__(417);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m) return [str];

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  if (/\$$/.test(m.pre)) {    
    for (var k = 0; k < post.length; k++) {
      var expansion = pre+ '{' + m.body + '}' + post[k];
      expansions.push(expansion);
    }
  } else {
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
      // {a},b}
      if (m.post.match(/,.*\}/)) {
        str = m.pre + '{' + m.body + escClose + m.post;
        return expand(str);
      }
      return [str];
    }

    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        // x{{a,b}}y ==> x{a}y x{b}y
        n = expand(n[0], false).map(embrace);
        if (n.length === 1) {
          return post.map(function(p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }

    // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.
    var N;

    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length)
      var incr = n.length == 3
        ? Math.abs(numeric(n[2]))
        : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);

      N = [];

      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === '\\')
            c = '';
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join('0');
              if (i < 0)
                c = '-' + z + c.slice(1);
              else
                c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = [];

      for (var j = 0; j < n.length; j++) {
        N.push.apply(N, expand(n[j], false));
      }
    }

    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
  }

  return expansions;
}



/***/ }),

/***/ 374:
/***/ ((module) => {

const isWindows = typeof process === 'object' &&
  process &&
  process.platform === 'win32'
module.exports = isWindows ? { sep: '\\' } : { sep: '/' }


/***/ }),

/***/ 276:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const minimatch = module.exports = (p, pattern, options = {}) => {
  assertValidPattern(pattern)

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  return new Minimatch(pattern, options).match(p)
}

module.exports = minimatch

const path = __nccwpck_require__(374)
minimatch.sep = path.sep

const GLOBSTAR = Symbol('globstar **')
minimatch.GLOBSTAR = GLOBSTAR
const expand = __nccwpck_require__(557)

const plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
const qmark = '[^/]'

// * => any number of characters
const star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
const twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
const twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// "abc" -> { a:true, b:true, c:true }
const charSet = s => s.split('').reduce((set, c) => {
  set[c] = true
  return set
}, {})

// characters that need to be escaped in RegExp.
const reSpecials = charSet('().*{}+?[]^$\\!')

// characters that indicate we have to add the pattern start
const addPatternStartSet = charSet('[.(')

// normalizes slashes.
const slashSplit = /\/+/

minimatch.filter = (pattern, options = {}) =>
  (p, i, list) => minimatch(p, pattern, options)

const ext = (a, b = {}) => {
  const t = {}
  Object.keys(a).forEach(k => t[k] = a[k])
  Object.keys(b).forEach(k => t[k] = b[k])
  return t
}

minimatch.defaults = def => {
  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
    return minimatch
  }

  const orig = minimatch

  const m = (p, pattern, options) => orig(p, pattern, ext(def, options))
  m.Minimatch = class Minimatch extends orig.Minimatch {
    constructor (pattern, options) {
      super(pattern, ext(def, options))
    }
  }
  m.Minimatch.defaults = options => orig.defaults(ext(def, options)).Minimatch
  m.filter = (pattern, options) => orig.filter(pattern, ext(def, options))
  m.defaults = options => orig.defaults(ext(def, options))
  m.makeRe = (pattern, options) => orig.makeRe(pattern, ext(def, options))
  m.braceExpand = (pattern, options) => orig.braceExpand(pattern, ext(def, options))
  m.match = (list, pattern, options) => orig.match(list, pattern, ext(def, options))

  return m
}





// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = (pattern, options) => braceExpand(pattern, options)

const braceExpand = (pattern, options = {}) => {
  assertValidPattern(pattern)

  // Thanks to Yeting Li <https://github.com/yetingli> for
  // improving this regexp to avoid a ReDOS vulnerability.
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

const MAX_PATTERN_LENGTH = 1024 * 64
const assertValidPattern = pattern => {
  if (typeof pattern !== 'string') {
    throw new TypeError('invalid pattern')
  }

  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError('pattern is too long')
  }
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
const SUBPARSE = Symbol('subparse')

minimatch.makeRe = (pattern, options) =>
  new Minimatch(pattern, options || {}).makeRe()

minimatch.match = (list, pattern, options = {}) => {
  const mm = new Minimatch(pattern, options)
  list = list.filter(f => mm.match(f))
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

// replace stuff like \* with *
const globUnescape = s => s.replace(/\\(.)/g, '$1')
const regExpEscape = s => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

class Minimatch {
  constructor (pattern, options) {
    assertValidPattern(pattern)

    if (!options) options = {}

    this.options = options
    this.set = []
    this.pattern = pattern
    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape ||
      options.allowWindowsEscape === false
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, '/')
    }
    this.regexp = null
    this.negate = false
    this.comment = false
    this.empty = false
    this.partial = !!options.partial

    // make the set of regexps etc.
    this.make()
  }

  debug () {}

  make () {
    const pattern = this.pattern
    const options = this.options

    // empty patterns and comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === '#') {
      this.comment = true
      return
    }
    if (!pattern) {
      this.empty = true
      return
    }

    // step 1: figure out negation, etc.
    this.parseNegate()

    // step 2: expand braces
    let set = this.globSet = this.braceExpand()

    if (options.debug) this.debug = (...args) => console.error(...args)

    this.debug(this.pattern, set)

    // step 3: now we have a set, so turn each one into a series of path-portion
    // matching patterns.
    // These will be regexps, except in the case of "**", which is
    // set to the GLOBSTAR object for globstar behavior,
    // and will not contain any / characters
    set = this.globParts = set.map(s => s.split(slashSplit))

    this.debug(this.pattern, set)

    // glob --> regexps
    set = set.map((s, si, set) => s.map(this.parse, this))

    this.debug(this.pattern, set)

    // filter out everything that didn't compile properly.
    set = set.filter(s => s.indexOf(false) === -1)

    this.debug(this.pattern, set)

    this.set = set
  }

  parseNegate () {
    if (this.options.nonegate) return

    const pattern = this.pattern
    let negate = false
    let negateOffset = 0

    for (let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++) {
      negate = !negate
      negateOffset++
    }

    if (negateOffset) this.pattern = pattern.substr(negateOffset)
    this.negate = negate
  }

  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne (file, pattern, partial) {
    var options = this.options

    this.debug('matchOne',
      { 'this': this, file: file, pattern: pattern })

    this.debug('matchOne', file.length, pattern.length)

    for (var fi = 0,
        pi = 0,
        fl = file.length,
        pl = pattern.length
        ; (fi < fl) && (pi < pl)
        ; fi++, pi++) {
      this.debug('matchOne loop')
      var p = pattern[pi]
      var f = file[fi]

      this.debug(pattern, p, f)

      // should be impossible.
      // some invalid regexp stuff in the set.
      /* istanbul ignore if */
      if (p === false) return false

      if (p === GLOBSTAR) {
        this.debug('GLOBSTAR', [pattern, p, f])

        // "**"
        // a/**/b/**/c would match the following:
        // a/b/x/y/z/c
        // a/x/y/z/b/c
        // a/b/x/b/x/c
        // a/b/c
        // To do this, take the rest of the pattern after
        // the **, and see if it would match the file remainder.
        // If so, return success.
        // If not, the ** "swallows" a segment, and try again.
        // This is recursively awful.
        //
        // a/**/b/**/c matching a/b/x/y/z/c
        // - a matches a
        // - doublestar
        //   - matchOne(b/x/y/z/c, b/**/c)
        //     - b matches b
        //     - doublestar
        //       - matchOne(x/y/z/c, c) -> no
        //       - matchOne(y/z/c, c) -> no
        //       - matchOne(z/c, c) -> no
        //       - matchOne(c, c) yes, hit
        var fr = fi
        var pr = pi + 1
        if (pr === pl) {
          this.debug('** at the end')
          // a ** at the end will just swallow the rest.
          // We have found a match.
          // however, it will not swallow /.x, unless
          // options.dot is set.
          // . and .. are *never* matched by **, for explosively
          // exponential reasons.
          for (; fi < fl; fi++) {
            if (file[fi] === '.' || file[fi] === '..' ||
              (!options.dot && file[fi].charAt(0) === '.')) return false
          }
          return true
        }

        // ok, let's see if we can swallow whatever we can.
        while (fr < fl) {
          var swallowee = file[fr]

          this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

          // XXX remove this slice.  Just pass the start index.
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug('globstar found match!', fr, fl, swallowee)
            // found a match.
            return true
          } else {
            // can't swallow "." or ".." ever.
            // can only swallow ".foo" when explicitly asked.
            if (swallowee === '.' || swallowee === '..' ||
              (!options.dot && swallowee.charAt(0) === '.')) {
              this.debug('dot detected!', file, fr, pattern, pr)
              break
            }

            // ** swallows a segment, and continue.
            this.debug('globstar swallow a segment, and continue')
            fr++
          }
        }

        // no match was found.
        // However, in partial mode, we can't say this is necessarily over.
        // If there's more *pattern* left, then
        /* istanbul ignore if */
        if (partial) {
          // ran out of file
          this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
          if (fr === fl) return true
        }
        return false
      }

      // something other than **
      // non-magic patterns just have to match exactly
      // patterns with magic have been turned into regexps.
      var hit
      if (typeof p === 'string') {
        hit = f === p
        this.debug('string match', p, f, hit)
      } else {
        hit = f.match(p)
        this.debug('pattern match', p, f, hit)
      }

      if (!hit) return false
    }

    // Note: ending in / means that we'll get a final ""
    // at the end of the pattern.  This can only match a
    // corresponding "" at the end of the file.
    // If the file ends in /, then it can only match a
    // a pattern that ends in /, unless the pattern just
    // doesn't have any more for it. But, a/b/ should *not*
    // match "a/b/*", even though "" matches against the
    // [^/]*? pattern, except in partial mode, where it might
    // simply not be reached yet.
    // However, a/b/ should still satisfy a/*

    // now either we fell off the end of the pattern, or we're done.
    if (fi === fl && pi === pl) {
      // ran out of pattern and filename at the same time.
      // an exact hit!
      return true
    } else if (fi === fl) {
      // ran out of file, but still had pattern left.
      // this is ok if we're doing the match as part of
      // a glob fs traversal.
      return partial
    } else /* istanbul ignore else */ if (pi === pl) {
      // ran out of pattern, still have file left.
      // this is only acceptable if we're on the very last
      // empty segment of a file with a trailing slash.
      // a/* should match a/b/
      return (fi === fl - 1) && (file[fi] === '')
    }

    // should be unreachable.
    /* istanbul ignore next */
    throw new Error('wtf?')
  }

  braceExpand () {
    return braceExpand(this.pattern, this.options)
  }

  parse (pattern, isSub) {
    assertValidPattern(pattern)

    const options = this.options

    // shortcuts
    if (pattern === '**') {
      if (!options.noglobstar)
        return GLOBSTAR
      else
        pattern = '*'
    }
    if (pattern === '') return ''

    let re = ''
    let hasMagic = !!options.nocase
    let escaping = false
    // ? => one single character
    const patternListStack = []
    const negativeLists = []
    let stateChar
    let inClass = false
    let reClassStart = -1
    let classStart = -1
    let cs
    let pl
    let sp
    // . and .. never match anything that doesn't start with .,
    // even when options.dot is set.
    const patternStart = pattern.charAt(0) === '.' ? '' // anything
    // not (start or / followed by . or .. followed by / or end)
    : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
    : '(?!\\.)'

    const clearStateChar = () => {
      if (stateChar) {
        // we had some state-tracking character
        // that wasn't consumed by this pass.
        switch (stateChar) {
          case '*':
            re += star
            hasMagic = true
          break
          case '?':
            re += qmark
            hasMagic = true
          break
          default:
            re += '\\' + stateChar
          break
        }
        this.debug('clearStateChar %j %j', stateChar, re)
        stateChar = false
      }
    }

    for (let i = 0, c; (i < pattern.length) && (c = pattern.charAt(i)); i++) {
      this.debug('%s\t%s %s %j', pattern, i, re, c)

      // skip over any that are escaped.
      if (escaping) {
        /* istanbul ignore next - completely not allowed, even escaped. */
        if (c === '/') {
          return false
        }

        if (reSpecials[c]) {
          re += '\\'
        }
        re += c
        escaping = false
        continue
      }

      switch (c) {
        /* istanbul ignore next */
        case '/': {
          // Should already be path-split by now.
          return false
        }

        case '\\':
          clearStateChar()
          escaping = true
        continue

        // the various stateChar values
        // for the "extglob" stuff.
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
          this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

          // all of those are literals inside a class, except that
          // the glob [!a] means [^a] in regexp
          if (inClass) {
            this.debug('  in class')
            if (c === '!' && i === classStart + 1) c = '^'
            re += c
            continue
          }

          // if we already have a stateChar, then it means
          // that there was something like ** or +? in there.
          // Handle the stateChar, then proceed with this one.
          this.debug('call clearStateChar %j', stateChar)
          clearStateChar()
          stateChar = c
          // if extglob is disabled, then +(asdf|foo) isn't a thing.
          // just clear the statechar *now*, rather than even diving into
          // the patternList stuff.
          if (options.noext) clearStateChar()
        continue

        case '(':
          if (inClass) {
            re += '('
            continue
          }

          if (!stateChar) {
            re += '\\('
            continue
          }

          patternListStack.push({
            type: stateChar,
            start: i - 1,
            reStart: re.length,
            open: plTypes[stateChar].open,
            close: plTypes[stateChar].close
          })
          // negation is (?:(?!js)[^/]*)
          re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
          this.debug('plType %j %j', stateChar, re)
          stateChar = false
        continue

        case ')':
          if (inClass || !patternListStack.length) {
            re += '\\)'
            continue
          }

          clearStateChar()
          hasMagic = true
          pl = patternListStack.pop()
          // negation is (?:(?!js)[^/]*)
          // The others are (?:<pattern>)<type>
          re += pl.close
          if (pl.type === '!') {
            negativeLists.push(pl)
          }
          pl.reEnd = re.length
        continue

        case '|':
          if (inClass || !patternListStack.length) {
            re += '\\|'
            continue
          }

          clearStateChar()
          re += '|'
        continue

        // these are mostly the same in regexp and glob
        case '[':
          // swallow any state-tracking char before the [
          clearStateChar()

          if (inClass) {
            re += '\\' + c
            continue
          }

          inClass = true
          classStart = i
          reClassStart = re.length
          re += c
        continue

        case ']':
          //  a right bracket shall lose its special
          //  meaning and represent itself in
          //  a bracket expression if it occurs
          //  first in the list.  -- POSIX.2 2.8.3.2
          if (i === classStart + 1 || !inClass) {
            re += '\\' + c
            continue
          }

          // handle the case where we left a class open.
          // "[z-a]" is valid, equivalent to "\[z-a\]"
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }

          // finish up the class.
          hasMagic = true
          inClass = false
          re += c
        continue

        default:
          // swallow any state char that wasn't consumed
          clearStateChar()

          if (reSpecials[c] && !(c === '^' && inClass)) {
            re += '\\'
          }

          re += c
          break

      } // switch
    } // for

    // handle the case where we left a class open.
    // "[abc" is valid, equivalent to "\[abc"
    if (inClass) {
      // split where the last [ was, and escape it
      // this is a huge pita.  We now have to re-walk
      // the contents of the would-be class to re-translate
      // any characters that were passed through as-is
      cs = pattern.substr(classStart + 1)
      sp = this.parse(cs, SUBPARSE)
      re = re.substr(0, reClassStart) + '\\[' + sp[0]
      hasMagic = hasMagic || sp[1]
    }

    // handle the case where we had a +( thing at the *end*
    // of the pattern.
    // each pattern list stack adds 3 chars, and we need to go through
    // and escape any | chars that were passed through as-is for the regexp.
    // Go through and escape them, taking care not to double-escape any
    // | chars that were already escaped.
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      let tail
      tail = re.slice(pl.reStart + pl.open.length)
      this.debug('setting tail', re, pl)
      // maybe some even number of \, then maybe 1 \, followed by a |
      tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
        /* istanbul ignore else - should already be done */
        if (!$2) {
          // the | isn't already escaped, so escape it.
          $2 = '\\'
        }

        // need to escape all those slashes *again*, without escaping the
        // one that we need for escaping the | character.  As it works out,
        // escaping an even number of slashes can be done by simply repeating
        // it exactly after itself.  That's why this trick works.
        //
        // I am sorry that you have to see this.
        return $1 + $1 + $2 + '|'
      })

      this.debug('tail=%j\n   %s', tail, tail, pl, re)
      const t = pl.type === '*' ? star
        : pl.type === '?' ? qmark
        : '\\' + pl.type

      hasMagic = true
      re = re.slice(0, pl.reStart) + t + '\\(' + tail
    }

    // handle trailing things that only matter at the very end.
    clearStateChar()
    if (escaping) {
      // trailing \\
      re += '\\\\'
    }

    // only need to apply the nodot start if the re starts with
    // something that could conceivably capture a dot
    const addPatternStart = addPatternStartSet[re.charAt(0)]

    // Hack to work around lack of negative lookbehind in JS
    // A pattern like: *.!(x).!(y|z) needs to ensure that a name
    // like 'a.xyz.yz' doesn't match.  So, the first negative
    // lookahead, has to look ALL the way ahead, to the end of
    // the pattern.
    for (let n = negativeLists.length - 1; n > -1; n--) {
      const nl = negativeLists[n]

      const nlBefore = re.slice(0, nl.reStart)
      const nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
      let nlAfter = re.slice(nl.reEnd)
      const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter

      // Handle nested stuff like *(*.js|!(*.json)), where open parens
      // mean that we should *not* include the ) in the bit that is considered
      // "after" the negated section.
      const openParensBefore = nlBefore.split('(').length - 1
      let cleanAfter = nlAfter
      for (let i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
      }
      nlAfter = cleanAfter

      const dollar = nlAfter === '' && isSub !== SUBPARSE ? '$' : ''
      re = nlBefore + nlFirst + nlAfter + dollar + nlLast
    }

    // if the re is not "" at this point, then we need to make sure
    // it doesn't match against an empty path part.
    // Otherwise a/* will match a/, which it should not.
    if (re !== '' && hasMagic) {
      re = '(?=.)' + re
    }

    if (addPatternStart) {
      re = patternStart + re
    }

    // parsing just a piece of a larger pattern.
    if (isSub === SUBPARSE) {
      return [re, hasMagic]
    }

    // skip the regexp for non-magical patterns
    // unescape anything in it, though, so that it'll be
    // an exact match against a file etc.
    if (!hasMagic) {
      return globUnescape(pattern)
    }

    const flags = options.nocase ? 'i' : ''
    try {
      return Object.assign(new RegExp('^' + re + '$', flags), {
        _glob: pattern,
        _src: re,
      })
    } catch (er) /* istanbul ignore next - should be impossible */ {
      // If it was an invalid regular expression, then it can't match
      // anything.  This trick looks for a character after the end of
      // the string, which is of course impossible, except in multi-line
      // mode, but it's not a /m regex.
      return new RegExp('$.')
    }
  }

  makeRe () {
    if (this.regexp || this.regexp === false) return this.regexp

    // at this point, this.set is a 2d array of partial
    // pattern strings, or "**".
    //
    // It's better to use .match().  This function shouldn't
    // be used, really, but it's pretty convenient sometimes,
    // when you just want to work with a regex.
    const set = this.set

    if (!set.length) {
      this.regexp = false
      return this.regexp
    }
    const options = this.options

    const twoStar = options.noglobstar ? star
      : options.dot ? twoStarDot
      : twoStarNoDot
    const flags = options.nocase ? 'i' : ''

    // coalesce globstars and regexpify non-globstar patterns
    // if it's the only item, then we just do one twoStar
    // if it's the first, and there are more, prepend (\/|twoStar\/)? to next
    // if it's the last, append (\/twoStar|) to previous
    // if it's in the middle, append (\/|\/twoStar\/) to previous
    // then filter out GLOBSTAR symbols
    let re = set.map(pattern => {
      pattern = pattern.map(p =>
        typeof p === 'string' ? regExpEscape(p)
        : p === GLOBSTAR ? GLOBSTAR
        : p._src
      ).reduce((set, p) => {
        if (!(set[set.length - 1] === GLOBSTAR && p === GLOBSTAR)) {
          set.push(p)
        }
        return set
      }, [])
      pattern.forEach((p, i) => {
        if (p !== GLOBSTAR || pattern[i-1] === GLOBSTAR) {
          return
        }
        if (i === 0) {
          if (pattern.length > 1) {
            pattern[i+1] = '(?:\\\/|' + twoStar + '\\\/)?' + pattern[i+1]
          } else {
            pattern[i] = twoStar
          }
        } else if (i === pattern.length - 1) {
          pattern[i-1] += '(?:\\\/|' + twoStar + ')?'
        } else {
          pattern[i-1] += '(?:\\\/|\\\/' + twoStar + '\\\/)' + pattern[i+1]
          pattern[i+1] = GLOBSTAR
        }
      })
      return pattern.filter(p => p !== GLOBSTAR).join('/')
    }).join('|')

    // must match entire pattern
    // ending in a * or ** will make it less strict.
    re = '^(?:' + re + ')$'

    // can match anything, as long as it's not this.
    if (this.negate) re = '^(?!' + re + ').*$'

    try {
      this.regexp = new RegExp(re, flags)
    } catch (ex) /* istanbul ignore next - should be impossible */ {
      this.regexp = false
    }
    return this.regexp
  }

  match (f, partial = this.partial) {
    this.debug('match', f, this.pattern)
    // short-circuit in the case of busted things.
    // comments, etc.
    if (this.comment) return false
    if (this.empty) return f === ''

    if (f === '/' && partial) return true

    const options = this.options

    // windows: need to use /, not \
    if (path.sep !== '/') {
      f = f.split(path.sep).join('/')
    }

    // treat the test path as a set of pathparts.
    f = f.split(slashSplit)
    this.debug(this.pattern, 'split', f)

    // just ONE of the pattern sets in this.set needs to match
    // in order for it to be valid.  If negating, then just one
    // match means that we have failed.
    // Either way, return on the first hit.

    const set = this.set
    this.debug(this.pattern, 'set', set)

    // Find the basename of the path by looking for the last non-empty segment
    let filename
    for (let i = f.length - 1; i >= 0; i--) {
      filename = f[i]
      if (filename) break
    }

    for (let i = 0; i < set.length; i++) {
      const pattern = set[i]
      let file = f
      if (options.matchBase && pattern.length === 1) {
        file = [filename]
      }
      const hit = this.matchOne(file, pattern, partial)
      if (hit) {
        if (options.flipNegate) return true
        return !this.negate
      }
    }

    // didn't get any hits.  this is success if it's a negative
    // pattern, failure otherwise.
    if (options.flipNegate) return false
    return this.negate
  }

  static defaults (def) {
    return minimatch.defaults(def).Minimatch
  }
}

minimatch.Minimatch = Minimatch


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(219);


/***/ }),

/***/ 219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(808);
var tls = __nccwpck_require__(404);
var http = __nccwpck_require__(685);
var https = __nccwpck_require__(687);
var events = __nccwpck_require__(361);
var assert = __nccwpck_require__(491);
var util = __nccwpck_require__(837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(536);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
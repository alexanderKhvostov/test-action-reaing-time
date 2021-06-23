require('./sourcemap-register.js')
/******/ ;(() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 351: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.issue = exports.issueCommand = void 0
      const os = __importStar(__nccwpck_require__(87))
      const utils_1 = __nccwpck_require__(278)
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
        const cmd = new Command(command, properties, message)
        process.stdout.write(cmd.toString() + os.EOL)
      }
      exports.issueCommand = issueCommand
      function issue(name, message = '') {
        issueCommand(name, {}, message)
      }
      exports.issue = issue
      const CMD_STRING = '::'
      class Command {
        constructor(command, properties, message) {
          if (!command) {
            command = 'missing.command'
          }
          this.command = command
          this.properties = properties
          this.message = message
        }
        toString() {
          let cmdStr = CMD_STRING + this.command
          if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' '
            let first = true
            for (const key in this.properties) {
              if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key]
                if (val) {
                  if (first) {
                    first = false
                  } else {
                    cmdStr += ','
                  }
                  cmdStr += `${key}=${escapeProperty(val)}`
                }
              }
            }
          }
          cmdStr += `${CMD_STRING}${escapeData(this.message)}`
          return cmdStr
        }
      }
      function escapeData(s) {
        return utils_1
          .toCommandValue(s)
          .replace(/%/g, '%25')
          .replace(/\r/g, '%0D')
          .replace(/\n/g, '%0A')
      }
      function escapeProperty(s) {
        return utils_1
          .toCommandValue(s)
          .replace(/%/g, '%25')
          .replace(/\r/g, '%0D')
          .replace(/\n/g, '%0A')
          .replace(/:/g, '%3A')
          .replace(/,/g, '%2C')
      }
      //# sourceMappingURL=command.js.map

      /***/
    },

    /***/ 186: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      var __awaiter =
        (this && this.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value)
                })
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value))
              } catch (e) {
                reject(e)
              }
            }
            function rejected(value) {
              try {
                step(generator['throw'](value))
              } catch (e) {
                reject(e)
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected)
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            )
          })
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.getState =
        exports.saveState =
        exports.group =
        exports.endGroup =
        exports.startGroup =
        exports.info =
        exports.warning =
        exports.error =
        exports.debug =
        exports.isDebug =
        exports.setFailed =
        exports.setCommandEcho =
        exports.setOutput =
        exports.getBooleanInput =
        exports.getMultilineInput =
        exports.getInput =
        exports.addPath =
        exports.setSecret =
        exports.exportVariable =
        exports.ExitCode =
          void 0
      const command_1 = __nccwpck_require__(351)
      const file_command_1 = __nccwpck_require__(717)
      const utils_1 = __nccwpck_require__(278)
      const os = __importStar(__nccwpck_require__(87))
      const path = __importStar(__nccwpck_require__(622))
      /**
       * The code to exit an action
       */
      var ExitCode
      ;(function (ExitCode) {
        /**
         * A code indicating that the action was successful
         */
        ExitCode[(ExitCode['Success'] = 0)] = 'Success'
        /**
         * A code indicating that the action was a failure
         */
        ExitCode[(ExitCode['Failure'] = 1)] = 'Failure'
      })((ExitCode = exports.ExitCode || (exports.ExitCode = {})))
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
        const convertedVal = utils_1.toCommandValue(val)
        process.env[name] = convertedVal
        const filePath = process.env['GITHUB_ENV'] || ''
        if (filePath) {
          const delimiter = '_GitHubActionsFileCommandDelimeter_'
          const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`
          file_command_1.issueCommand('ENV', commandValue)
        } else {
          command_1.issueCommand('set-env', { name }, convertedVal)
        }
      }
      exports.exportVariable = exportVariable
      /**
       * Registers a secret which will get masked from logs
       * @param secret value of the secret
       */
      function setSecret(secret) {
        command_1.issueCommand('add-mask', {}, secret)
      }
      exports.setSecret = setSecret
      /**
       * Prepends inputPath to the PATH (for this action and future actions)
       * @param inputPath
       */
      function addPath(inputPath) {
        const filePath = process.env['GITHUB_PATH'] || ''
        if (filePath) {
          file_command_1.issueCommand('PATH', inputPath)
        } else {
          command_1.issueCommand('add-path', {}, inputPath)
        }
        process.env[
          'PATH'
        ] = `${inputPath}${path.delimiter}${process.env['PATH']}`
      }
      exports.addPath = addPath
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
        const val =
          process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || ''
        if (options && options.required && !val) {
          throw new Error(`Input required and not supplied: ${name}`)
        }
        if (options && options.trimWhitespace === false) {
          return val
        }
        return val.trim()
      }
      exports.getInput = getInput
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
          .filter((x) => x !== '')
        return inputs
      }
      exports.getMultilineInput = getMultilineInput
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
        const trueValue = ['true', 'True', 'TRUE']
        const falseValue = ['false', 'False', 'FALSE']
        const val = getInput(name, options)
        if (trueValue.includes(val)) return true
        if (falseValue.includes(val)) return false
        throw new TypeError(
          `Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
            `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
        )
      }
      exports.getBooleanInput = getBooleanInput
      /**
       * Sets the value of an output.
       *
       * @param     name     name of the output to set
       * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function setOutput(name, value) {
        process.stdout.write(os.EOL)
        command_1.issueCommand('set-output', { name }, value)
      }
      exports.setOutput = setOutput
      /**
       * Enables or disables the echoing of commands into stdout for the rest of the step.
       * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
       *
       */
      function setCommandEcho(enabled) {
        command_1.issue('echo', enabled ? 'on' : 'off')
      }
      exports.setCommandEcho = setCommandEcho
      //-----------------------------------------------------------------------
      // Results
      //-----------------------------------------------------------------------
      /**
       * Sets the action status to failed.
       * When the action exits it will be with an exit code of 1
       * @param message add error issue message
       */
      function setFailed(message) {
        process.exitCode = ExitCode.Failure
        error(message)
      }
      exports.setFailed = setFailed
      //-----------------------------------------------------------------------
      // Logging Commands
      //-----------------------------------------------------------------------
      /**
       * Gets whether Actions Step Debug is on or not
       */
      function isDebug() {
        return process.env['RUNNER_DEBUG'] === '1'
      }
      exports.isDebug = isDebug
      /**
       * Writes debug message to user log
       * @param message debug message
       */
      function debug(message) {
        command_1.issueCommand('debug', {}, message)
      }
      exports.debug = debug
      /**
       * Adds an error issue
       * @param message error issue message. Errors will be converted to string via toString()
       */
      function error(message) {
        command_1.issue(
          'error',
          message instanceof Error ? message.toString() : message
        )
      }
      exports.error = error
      /**
       * Adds an warning issue
       * @param message warning issue message. Errors will be converted to string via toString()
       */
      function warning(message) {
        command_1.issue(
          'warning',
          message instanceof Error ? message.toString() : message
        )
      }
      exports.warning = warning
      /**
       * Writes info to log with console.log.
       * @param message info message
       */
      function info(message) {
        process.stdout.write(message + os.EOL)
      }
      exports.info = info
      /**
       * Begin an output group.
       *
       * Output until the next `groupEnd` will be foldable in this group
       *
       * @param name The name of the output group
       */
      function startGroup(name) {
        command_1.issue('group', name)
      }
      exports.startGroup = startGroup
      /**
       * End an output group.
       */
      function endGroup() {
        command_1.issue('endgroup')
      }
      exports.endGroup = endGroup
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
          startGroup(name)
          let result
          try {
            result = yield fn()
          } finally {
            endGroup()
          }
          return result
        })
      }
      exports.group = group
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
        command_1.issueCommand('save-state', { name }, value)
      }
      exports.saveState = saveState
      /**
       * Gets the value of an state set by this action's main execution.
       *
       * @param     name     name of the state to get
       * @returns   string
       */
      function getState(name) {
        return process.env[`STATE_${name}`] || ''
      }
      exports.getState = getState
      //# sourceMappingURL=core.js.map

      /***/
    },

    /***/ 717: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      // For internal use, subject to change.
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.issueCommand = void 0
      // We use any as a valid input type
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const fs = __importStar(__nccwpck_require__(747))
      const os = __importStar(__nccwpck_require__(87))
      const utils_1 = __nccwpck_require__(278)
      function issueCommand(command, message) {
        const filePath = process.env[`GITHUB_${command}`]
        if (!filePath) {
          throw new Error(
            `Unable to find environment variable for file command ${command}`
          )
        }
        if (!fs.existsSync(filePath)) {
          throw new Error(`Missing file at path: ${filePath}`)
        }
        fs.appendFileSync(
          filePath,
          `${utils_1.toCommandValue(message)}${os.EOL}`,
          {
            encoding: 'utf8'
          }
        )
      }
      exports.issueCommand = issueCommand
      //# sourceMappingURL=file-command.js.map

      /***/
    },

    /***/ 278: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      // We use any as a valid input type
      /* eslint-disable @typescript-eslint/no-explicit-any */
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.toCommandValue = void 0
      /**
       * Sanitizes an input into a string so it can be passed into issueCommand safely
       * @param input input to sanitize into a string
       */
      function toCommandValue(input) {
        if (input === null || input === undefined) {
          return ''
        } else if (typeof input === 'string' || input instanceof String) {
          return input
        }
        return JSON.stringify(input)
      }
      exports.toCommandValue = toCommandValue
      //# sourceMappingURL=utils.js.map

      /***/
    },

    /***/ 820: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      module.exports = __nccwpck_require__(576)

      /***/
    },

    /***/ 576: /***/ (module) => {
      'use strict'
      /*!
       * reading-time
       * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
       * MIT Licensed
       */

      function ansiWordBound(c) {
        return ' ' === c || '\n' === c || '\r' === c || '\t' === c
      }

      function readingTime(text, options) {
        var words = 0,
          start = 0,
          end = text.length - 1,
          wordBound,
          i

        options = options || {}

        // use default values if necessary
        options.wordsPerMinute = options.wordsPerMinute || 200

        // use provided function if available
        wordBound = options.wordBound || ansiWordBound

        // fetch bounds
        while (wordBound(text[start])) start++
        while (wordBound(text[end])) end--

        // calculate the number of words
        for (i = start; i <= end; ) {
          for (; i <= end && !wordBound(text[i]); i++);
          words++
          for (; i <= end && wordBound(text[i]); i++);
        }

        // reading time stats
        var minutes = words / options.wordsPerMinute
        // Math.round used to resolve floating point funkyness
        //   http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
        var time = Math.round(minutes * 60 * 1000)
        var displayed = Math.ceil(minutes.toFixed(2))

        return {
          text: displayed + ' min read',
          minutes: minutes,
          time: time,
          words: words
        }
      }

      /**
       * Export
       */
      module.exports = readingTime

      /***/
    },

    /***/ 747: /***/ (module) => {
      'use strict'
      module.exports = require('fs')

      /***/
    },

    /***/ 87: /***/ (module) => {
      'use strict'
      module.exports = require('os')

      /***/
    },

    /***/ 622: /***/ (module) => {
      'use strict'
      module.exports = require('path')

      /***/
    }

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __nccwpck_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ var threw = true
    /******/ try {
      /******/ __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __nccwpck_require__
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete __webpack_module_cache__[moduleId]
      /******/
    }
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __nccwpck_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/compat */
  /******/
  /******/ if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab =
      __dirname +
      '/' /************************************************************************/
  var __webpack_exports__ = {}
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  ;(() => {
    'use strict'
    // ESM COMPAT FLAG
    __nccwpck_require__.r(__webpack_exports__)

    // EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
    var core = __nccwpck_require__(186)
    // EXTERNAL MODULE: external "fs"
    var external_fs_ = __nccwpck_require__(747) // CONCATENATED MODULE: external "util"
    const external_util_namespaceObject = require('util') // CONCATENATED MODULE: external "child_process"
    const external_child_process_namespaceObject = require('child_process')
    // EXTERNAL MODULE: external "path"
    var external_path_ = __nccwpck_require__(622)
    // EXTERNAL MODULE: ./node_modules/reading-time/index.js
    var reading_time = __nccwpck_require__(820) // CONCATENATED MODULE: ./src/getFile.mjs
    const readFileAsync = (0, external_util_namespaceObject.promisify)(
      external_fs_.readFile
    )

    async function getFile(path) {
      const fileContent = await readFileAsync(path)
      return fileContent
    } // CONCATENATED MODULE: ./src/calculateRoutesReadingTime.mjs

    async function countReadingTimeByContent(path) {
      const content = await getFile(path.substring(1))
      return reading_time(content.toString())
    }

    async function addReadingTimeToRoutes(routes) {
      return await Promise.all(
        routes.map(async (route) => {
          if (route.routes) {
            const routes = await addReadingTimeToRoutes(route.routes)
            return { ...route, routes }
          }
          const { text, minutes, words } = await countReadingTimeByContent(
            route.path
          )
          return {
            ...route,
            readingTime: {
              text: text.replace('read', '').trim(),
              minutes,
              words
            }
          }
        })
      )
    } // CONCATENATED MODULE: ./src/index.mjs

    const writeFileAsync = (0, external_util_namespaceObject.promisify)(
      external_fs_.writeFile
    )
    const statAsync = (0, external_util_namespaceObject.promisify)(
      external_fs_.stat
    )

    const exec = (cmd, args = []) =>
      new Promise((resolve, reject) => {
        console.log(`Started: ${cmd} ${args.join(' ')}`)
        const app = (0, external_child_process_namespaceObject.spawn)(
          cmd,
          args,
          { stdio: 'inherit' }
        )
        app.on('close', (code) => {
          if (code !== 0) {
            let err = new Error(`Invalid status code: ${code}`)
            err.code = code
            return reject(err)
          }
          return resolve(code)
        })
        app.on('error', reject)
      })

    async function run() {
      try {
        const docsFolder = core.getInput('docs_folder_name')
        const manifestPath = `${docsFolder}/manifest.json`
        const buffer = await getFile(manifestPath)
        const manifest = await JSON.parse(buffer.toString())

        const routesWithReadingTime = await addReadingTimeToRoutes(
          manifest.routes
        )

        const newManifest = JSON.stringify({
          ...manifest,
          routes: routesWithReadingTime
        })

        await writeFileAsync(manifestPath, newManifest)
        const statResult = await statAsync(manifestPath)
        ;(0, core.setOutput)('size', `${statResult.size}`)
        // eslint-disable-next-line no-undef
        await exec('bash', [__nccwpck_require__.ab + 'start.sh'])
      } catch (error) {
        core.error(error)
        core.setFailed(error.message)
      }
    }

    run()
  })()

  module.exports = __webpack_exports__
  /******/
})()
//# sourceMappingURL=index.js.map

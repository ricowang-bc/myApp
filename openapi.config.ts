const { generateService } = require("keliu-openapi-gen");

generateService({
    requestLibPath:
        "import request from '../../request-adapter';import { admin_app_api_base_url } from '../config'",
    schemaPath: "http://api.lincee.cn/swagger/v1/swagger.json",
    serversPath: "./src/api",
    enumStyle: "enum",
    namespace: false,
    apiPrefix: "admin_app_api_base_url",
    projectName: "admin/gen",
    hook: {
        customFunctionName: (a: any) => {
            return a.operationId.split("_").pop();
        },
    },
});

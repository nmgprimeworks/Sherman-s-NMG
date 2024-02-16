
module.exports =

{
    default: {
        tags: process.env.npm_config_TAGS || "",
        dryRun: false,
        formatOptions: {

            "snippetInterface": "async-await"
        },
        paths: [
            "e2etests/features/*feature"
        ],
        require: [
            "e2etests/steps/*.ts", "e2etests/utils.basePage.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        runtimeArgs: [
            "./node_modules/.bin/cucumber-js",
            "${file}",
            "--tags",
            "@only"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json"
        ]
    }

}
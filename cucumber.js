{
  "default": {
    "requireModule": ["ts-node/register"],
    "require": ["test/features/**/*.js"],
    "format": [
      "progress-bar",
      "json:test/reports/cucumber-report.json",
      "html:test/reports/cucumber-report.html"
    ]
  }
}

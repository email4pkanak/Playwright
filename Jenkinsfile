pipeline {
  agent any

  environment {
    // Define NodeJS installation name as configured in Jenkins Global Tool Configuration
    NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
  }
  stages {
    stage('Checkout') {
      steps {
        // Checkout the code from Git repository
        git branch: 'master', url: 'https://github.com/email4pkanak/Playwright.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        script {
          // Install the dependencies defined in package.json
          bat """
            npm install
            npx playwright install --with-deps
          """
        }
      }
    }
    stage('Run Playwright Tests') {
      steps {
        script {
          // Run the Playwright tests using npx
          bat 'npx playwright test'
        }
      }
    }
    stage('Publish Results') {
      steps {
        // Here you could add steps to publish the test results, e.g. via JUnit plugin
        // or upload logs, screenshots, etc.
        junit '**/test-results.xml' // If you're generating JUnit-style reports
      }
    }
  }
  post {
    always {
      // Clean up or notify on any result
      echo 'Cleaning up...'
    }

    success {
      echo 'Tests passed!'
    }

    failure {
      echo 'Tests failed!'
          }
  }
}

pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh "echo 'The following "npm" command (if executed) installs the "cross-env"'"
                sh "dependency into the local "node_modules" directory, which will ultimately"
                sh "echo 'be stored in the Jenkins home directory. As described in'"
                sh "echo 'https://docs.npmjs.com/cli/install, the "--save-dev" flag causes the'"
                sh "echo '"cross-env" dependency to be installed as "devDependencies". For the'"
                sh "echo 'purposes of this tutorial, this flag is not important. However, when'"
                sh "echo 'installing this dependency, it would typically be done so using this'" 
                sh "echo 'flag. For a comprehensive explanation about "devDependencies", see'"
                sh "echo 'https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies.'"
                sh "set -x"
                sh "set +x"
                sh "echo 'The following "npm" command tests that your simple Node.js/React'"
                sh "echo 'application renders satisfactorily. This command actually invokes the test'"
                sh "echo 'runner Jest (https://facebook.github.io/jest/).'"
                sh "set -x"
                sh "npm test"
            }
        }
    }
}
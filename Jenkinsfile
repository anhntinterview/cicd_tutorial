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
                sh "echo 'The following "npm" command (if executed) installs the "cross-env"' dependency into the local "node_modules" directory, which will ultimately"
            }
        }
    }
}
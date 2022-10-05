pipeline {
    agent {
        docker {
            agent { docker { image 'node:8.12.0' } }
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
// /home/Desktop/PROJECT/TRAINING2022/cicd_tutorial

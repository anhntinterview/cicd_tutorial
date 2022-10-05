pipeline {
    agent any
    environment { 
        CC = 'clang'
    }
    stages {
        stage('Example') {
            environment { 
                DEBUG_FLAGS = '-g'
            }
            steps {
                echo "Running ${env.BUILD_ID}, ${env.BUILD_NUMBER} on ${env.JENKINS_URL}"
                echo "Running ${env.BUILD_TAG}, ${env.BUILD_URL}, ${env.EXECUTOR_NUMBER} "
                echo "Running ${env.JOB_NAME}, ${env.NODE_NAME}, ${env.WORKSPACE} "
                sh 'printenv'
            }
        }
    }
}
// /home/Desktop/PROJECT/TRAINING2022/cicd_tutorial

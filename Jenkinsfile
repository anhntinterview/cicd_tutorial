pipeline {
    agent any

    stages {
        stage('Example') {
            steps {
                echo "Running ${env.BUILD_ID}, ${env.BUILD_NUMBER} on ${env.JENKINS_URL}"
                echo "Running ${env.BUILD_TAG}, ${env.BUILD_URL}, ${env.EXECUTOR_NUMBER} "
                echo "Running ${env.JOB_NAME}, ${env.NODE_NAME}, ${env.WORKSPACE} "
            }
        }
    }
}
// /home/Desktop/PROJECT/TRAINING2022/cicd_tutorial

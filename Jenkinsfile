pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
        HOME = '.'
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test and Build') {
            parallel {
                stage('Run Tests') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('Create Build Artifacts') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
        // stage('Production') {
        //     steps {
        //         withAWS(region:'us-east-1', credentials:'1') { //credentials: was create from Jenkins Configuration. It is Jenkins Credential ID
        //             s3Delete(bucket: '221004-anhntaws-bucket', path:'**/*')
        //             s3Upload(bucket: '221004-anhntaws-bucket', workingDir:'build', includePathPattern:'**/*')
        //         }
        //     }
        // }
    }
}

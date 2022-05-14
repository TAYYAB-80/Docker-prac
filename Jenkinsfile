pipeline{

	agent {label 'linux'}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/TAYYAB-IT/Docker-prac.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t tybtest90/test1:v1 .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push tybtest90/test1:v1'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}

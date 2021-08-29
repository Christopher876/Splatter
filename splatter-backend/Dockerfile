# https://spring.io/guides/gs/spring-boot-docker/
FROM adoptopenjdk:11-jdk

# Add a user so that the app will not run as root
# Set the user to spring
RUN useradd -ms /bin/bash spring
USER spring:spring
WORKDIR /home/spring

# Copy the necessary files and start the spring boot server
ARG DEPENDENCY=target/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib app/lib
COPY ${DEPENDENCY}/META-INF app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes app
ENTRYPOINT ["java","-cp","app:app/lib/*","net.christopherw.splatter.Application"]
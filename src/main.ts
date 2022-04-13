import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializePrototypes } from './prototypes';

const initializeApplication = () => {
	NestFactory.create(AppModule).then(async (application) => {
		application.enableCors({});
		await application.listen(process.env.PORT || 3999);
	});
};

(async () => {
	initializePrototypes();
	initializeApplication();
})();

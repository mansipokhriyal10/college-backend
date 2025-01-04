import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeController } from './college/college.controller';
import { CollegeService } from './college/college.service';
import { College } from './entities/college.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ctsgaqrqf0us73ds9b10-a',
      port: 5432,
      username: 'college_db_3gz8_user',
      password: 'e2tRPjQ3vtVcREyl1lWuv4n1KFVAMb6O',
      database: 'college_db_3gz8',
      entities: [College, CollegePlacement, CollegeWiseCourse],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse]),
  ],
  controllers: [CollegeController],
  providers: [CollegeService],
})
export class AppModule {}

import gulp from 'gulp';
import s3 from 'gulp-s3';

const AWS = {
  key: process.env.S3_ACCESS_KEY_ID,
  secret: process.env.S3_SECRET_ACCESS_KEY,
  bucket: process.env.S3_SECRET_BUCKET,
  region: process.env.S3_SECRET_REGION,
};

export const uploadToS3 = () => {
  return gulp.src('dist/**').pipe(s3(AWS));
};

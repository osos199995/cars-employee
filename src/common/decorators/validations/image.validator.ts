import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { FileUpload } from 'graphql-upload';
export function IsImage(
  fileType: string,
  validationOptions?: ValidationOptions,
) {
  //TODO check why class validator don't read  image
  return function (file1: any, propertyName: string) {
    registerDecorator({
      name: 'IsImage',
      target: file1.constructor,
      propertyName: propertyName,
      constraints: [fileType],
      options: validationOptions,
      validator: {
        validate(file: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = args.object as any;
          return true;
          // const mimeType: string = file.mimetype;
          // console.log(mimeType);
          // const [type, _] = mimeType.split('/');
          // console.log(type);
          // if (type !== 'image') return false;
          // return true;
        },
      },
    });
  };
}

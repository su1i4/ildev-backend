import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {

    async saveFilePath(filePath: string) {
        // Здесь можно сохранить путь файла в БД
        return { message: 'Файл загружен!', filePath };
    }

}

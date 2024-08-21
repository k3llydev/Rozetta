import { BaseLocalizationAdapter } from '@necord/localization';

interface CustomLocalizationOptions {
    fallbackLocale: string;
    locales: Record<string, Record<string, string>>;
}

export class CustomLocalizationAdapter extends BaseLocalizationAdapter<CustomLocalizationOptions> {
    public getTranslation(key: string, locale: string, ...args: any[]): string {
        return `${key} by ${locale}`;
    }
}
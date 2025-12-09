const shadcnElements = {
    button: {
        default: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            }
        }
    },
    "radio-group": "grid gap-3",
    "radio-group-item": "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
    "radio-group-indicator": "relative flex items-center justify-center [&_svg]:fill-primary [&_svg]:absolute [&_svg]:top-1/2 [&_svg]:left-1/2 [&_svg]:size-2 [&_svg]:-translate-x-1/2 [&_svg]:-translate-y-1/2"
};

const css = [
    "-card-foreground",
    "-popover-foreground",
    "-primary-foreground",
    "-secondary-foreground",
    "-muted-foreground",
    "-accent-foreground",
    "-sidebar-foreground",
    "-sidebar-primary",
    "-sidebar-primary-foreground",
    "-sidebar-accent",
    "-sidebar-accent-foreground",
    "-sidebar-border",
    "-sidebar-ring",
    "-chart-1",
    "-chart-2",
    "-chart-3",
    "-chart-4",
    "-chart-5",
    "-radius",
    "-background",
    "-foreground",
    "-card",
    "-popover",
    "-primary",
    "-secondary",
    "-muted",
    "-accent",
    "-destructive",
    "-border",
    "-input",
    "-ring",
    "-sidebar"
];

const transform = (classList) => css.reduce((p, c) => {
    let regex1 = new RegExp(c + ' ', "g");
    let regex2 = new RegExp(c + '/', "g");
    let regex3 = new RegExp(c + '"', "g");
    return p
        .replace(/&amp;/g, '&')
        .replace(/&gt;/g, '>')
        .replace(regex1, '-(-' + c + ') ')
        .replace(regex2, '-(-' + c + ')/')
        .replace(regex3, '-(-' + c + ')"');
}, classList);

const module = (element, variant = 'default', size = 'default') => {
    const classes = (shadcnElements[element]?.default ? [
        shadcnElements[element].default,
        shadcnElements[element].variants.variant[variant] || '',
        shadcnElements[element].variants.size[size] || ''
    ]: [shadcnElements[element]]).join(' ').trim();

    return transform(classes);
};

export default module;



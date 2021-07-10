
export default function handleArrayOption(prop, index = 'all', plus = '') {
    if (typeof prop === 'string' && prop.length > 0) {
        return (single) => {
            if (!single[prop])
                return '';
            if (index === 'all') {
                return single[prop].join(plus);
            }
            return single[prop][index];
        };
    }
    return false;
}
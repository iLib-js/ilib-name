/*
 * testname_de.js - test the name object in German
 *
 * Copyright © 2013-2015,2017,2022 JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Name from '../src/NameFmt.js';
import Name from '../src/Name.js';

export const testname_bg = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDEParseSimpleName_bg_BG: function(test) {
        test.expect(2);
        const parsed = new Name("Мария Георгиева", {locale: 'bg-BG'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Мария",
            familyName: "Георгиева"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseAdjunctNames_bg_BG: function(test) {
        test.expect(2);
        const parsed = new Name("Стоян Драганов", {locale: 'bg-BG'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Стоян",
            familyName: "Драганов"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseSingleNameWithPrefixAndAdjunct_bg_BG: function(test) {
        test.expect(2);
        const parsed = new Name("сестра Драганов", {locale: 'bg-BG'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "сестра",
            familyName: "Драганов"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseTitle_bg_BG: function(test) {
        test.expect(2);
        const parsed = new Name("Мария Георгиева младши", {locale: 'bg-BG'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            suffix: "младши",
            givenName: "Мария",
            familyName: "Георгиева"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseTitleWithFamilyOnly_bg_BG: function(test) {
        test.expect(2);
        const parsed = new Name("сестра. Георгиева", {locale: 'bg-BG'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "сестра.",
            familyName: "Георгиева"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseEverything_bg_BG: function(test) {
        test.expect(2);
        const parsed = new Name("баба Мария Георгиева", {locale: 'bg-BG'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "баба",
            givenName: "Мария",
            familyName: "Георгиева"
        };

        test.contains(parsed, expected);
        test.done();
    },


    /*
     * Format Tests
     */

    testDEFormatSimpleNameShort_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Мария",
            familyName: "Георгиева"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Мария Георгиева";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameMedium_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Мария",

            familyName: "Георгиева"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Мария Георгиева";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameLong_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Мария",

            familyName: "Георгиева",
            suffix: "asdf"
        });
        let fmt = new NameFmt({
            style: "long",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Мария Георгиева";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameFull_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "лекар",
            givenName: "Мария",

            familyName: "Георгиева",
            suffix: " MdB"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "лекар Мария Георгиева MdB";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameShort_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "лекар",
            givenName: "Мария",
            familyName: "Георгиева"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Мария Георгиева";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameMedium_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "лекар",
            givenName: "Мария",
            familyName: "Георгиева"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Мария Георгиева";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameLong_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "лекар",
            givenName: "Мария",
            familyName: "Георгиева"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "лекар Мария Георгиева";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameShort_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameMedium_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameLong_bg_BG: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'bg-BG'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "小地獸";

        test.equal(formatted, expected);
        test.done();
    },






    testDEParseSimpleName_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseTripleName_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseSingleNameWithPrefixAndAdjunct_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("prezident Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "prezident",
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseHypenatedName_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseTitle_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("prezident Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "prezident",
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseTitle_cs_CZ1: function(test) {
        test.expect(2);
        const parsed = new Name("předsedkyně Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "předsedkyně",
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseTitleWithFamilyOnlyAndAdjunct_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("viceprezident Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "viceprezident",
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseEverything_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("dáma Yana Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "dáma",
            givenName: "Yana",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseCompoundHonorific_cs_CZ: function(test) {
        test.expect(2);
        const parsed = new Name("šéfkuchař Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "šéfkuchař",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseCompoundHonorific_cs_CZ1: function(test) {
        test.expect(2);
        const parsed = new Name("Dr. Synkova", {locale: 'cs-CZ'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "Dr.",
            familyName: "Synkova"
        };

        test.contains(parsed, expected);
        test.done();
    },
    /*
     * Format Tests
     */

    testDEFormatSimpleNameShort_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Yana",
            familyName: "Synkova"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Yana Synkova";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameMedium_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Yana",
            familyName: "Synkova"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Yana Synkova";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameLong_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Yana",
            familyName: "Synkova",
            suffix: "asdf"
        });
        let fmt = new NameFmt({
            style: "long",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Yana Synkova";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameFull_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "prezidentí ministerský předseda",
            givenName: "Yana",
            familyName: "Synkova",
            suffix: "v důchodu"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "prezidentí ministerský předseda Yana Synkova v důchodu";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameShort_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "prezidentí ministerský",
            givenName: "Yana",
            familyName: "von Synkova"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Yana von Synkova";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameMedium_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "prezidentí ministerský",
            givenName: "Yana",
            familyName: "von Synkova"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Yana von Synkova";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameLong_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "prezidentí ministerský",
            givenName: "Yana",
            familyName: "von Synkova"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "prezidentí ministerský Yana von Synkova";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameShort_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameMedium_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameLong_cs_CZ: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'cs-CZ'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "小地獸太太";

        test.equal(formatted, expected);
        test.done();
    },

    //test cases for dutch


    testDEParseSimpleName_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Raeburn van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Raeburn",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseAdjunctNames_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Humphrey Dallas Bogart", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Humphrey",
            middleName: "Dallas",
            familyName: "Bogart"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseSingleName_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Armin", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Armin",
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseSingleNameWithPrefixAndAdjunct_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("meneer Raeburn van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "meneer",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testDEParseHypenatedName_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Raeburn van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Raeburn",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseQuadrupleName_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Raeburn Jürgen van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            givenName: "Raeburn",
            middleName: "Jürgen",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseTitle_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("meneer Dr. Raeburn van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "meneer Dr.",
            givenName: "Raeburn",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseTitle_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("meneer Dr. Raeburn van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "meneer Dr.",
            givenName: "Raeburn",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseTitleWithFamilyOnly_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("meneer van Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "meneer",
            familyName: "van Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testDEParseHonorific_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Fr. Julia Maier", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "Fr.",
            givenName: "Julia",
            familyName: "Maier"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseEverything_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("guvernør Raeburn Jürgen van Buren pensioneret", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "guvernør",
            givenName: "Raeburn",
            middleName: "Jürgen",
            familyName: "van Buren",
            suffix: "pensioneret"
        };

        test.contains(parsed, expected);
        test.done();
    },

    testDEParseCompoundHonorific_da_DK: function(test) {
        test.expect(2);
        const parsed = new Name("Mr. Buren", {locale: 'da-DK'});
        test.ok(typeof(parsed) !== "undefined");

        const expected = {
            prefix: "Mr.",
            familyName: "Buren"
        };

        test.contains(parsed, expected);
        test.done();
    },

    /*
     * Format Tests
     */

    testDEFormatSimpleNameShort_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Raeburn",
            middleName: "Michael",
            familyName: "van Buren"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Raeburn van Buren";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameMedium_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Raeburn",
            familyName: "van Buren"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Raeburn van Buren";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameLong_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Raeburn",
            familyName: "van Buren",
            suffix: "asdf"
        });
        let fmt = new NameFmt({
            style: "long",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Raeburn van Buren";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatSimpleNameFull_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "meneer Dr.",
            givenName: "Raeburn",
            familyName: "van Buren",
            suffix: "pensioneret"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "meneer Dr. Raeburn van Buren pensioneret";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatComplexNameShort_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "meneer Dr.",
            givenName: "Raeburn",
            middleName: "Michael Uwe",
            familyName: "von van Buren",
            suffix: "pensioneret"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Raeburn von van Buren";

        test.equal(formatted, expected);
        test.done();
    },



    testDEFormatComplexNameLong_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "meneer Dr.",
            givenName: "Raeburn",
            middleName: "Michael Uwe",
            familyName: "von van Buren",
            suffix: "pensioneret"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "meneer Dr. Raeburn Michael Uwe von van Buren pensioneret";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameShort_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameMedium_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testDEFormatAsianNameLong_da_DK: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地",
            suffix: "太太"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'da-DK'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "小地獸太太";

        test.equal(formatted, expected);
        test.done();
    }

};
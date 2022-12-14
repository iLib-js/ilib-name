/*
 * testname_bs.js - test the name object in Bosnian
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

import NameFmt from '../src/NameFmt.js';
import Name from '../src/Name.js';
import { LocaleData } from 'ilib-localedata';
import { getPlatform } from 'ilib-env';

let setUpPerformed = false;


export const testname_bs = {
    setUp: function(callback) {
        if (getPlatform() === "browser" && !setUpPerformed) {
            // does not support sync, so we have to ensure the locale
            // data is loaded before we can do all these sync tests
            setUpPerformed = true;
            return LocaleData.ensureLocale("bs-BA").then(() => {
                callback();
            });
        } else {
            callback();
        }
    },

    testParseSimpleName_bs: function(test) {
        test.expect(2);
        const parsed = new Name("Derviš Sušić", {locale: 'bs-BA'});
        test.ok(typeof(parsed) !== "undefined");

        const expected =   {
            givenName: "Derviš",
            familyName: "Sušić"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseAdjunctNames_bs: function(test) {
        test.expect(2);
        const parsed = new Name("Derviš Sušić", {locale: 'bs-BA'});
        test.ok(typeof(parsed) !== "undefined");

        const expected =  {
            givenName: "Derviš",
            familyName: "Sušić"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseSingleNameWithPrefixAndAdjunct_bs: function(test) {
        test.expect(2);
        const parsed = new Name("Gospodin i Gospođica Sušić", {locale: 'bs-BA'});
        test.ok(typeof(parsed) !== "undefined");

        const expected =   {
            prefix: "Gospodin i Gospođica",
            familyName: "Sušić"
        };

        test.contains(parsed, expected);
        test.done();
    },


    testParseTitle_bs: function(test) {
        test.expect(2);
        const parsed = new Name("Derviš Sušić viši", {locale: 'bs-BA'});
        test.ok(typeof(parsed) !== "undefined");

        const expected =    {
            suffix: "viši",
            givenName: "Derviš",
            familyName: "Sušić"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseTitleWithFamilyOnly_bs: function(test) {
        test.expect(2);
        const parsed = new Name("predsjednik Sušić", {locale: 'bs-BA'});
        test.ok(typeof(parsed) !== "undefined");

        const expected =   {
            prefix: "predsjednik",
            familyName: "Sušić"
        };

        test.contains(parsed, expected);
        test.done();
    },



    testParseEverything_bs: function(test) {
        test.expect(2);
        const parsed = new Name("predsjednik Derviš Sušić", {locale: 'bs-BA'});
        test.ok(typeof(parsed) !== "undefined");

        const expected =    {
            prefix: "predsjednik",
            givenName: "Derviš",
            familyName: "Sušić"
        };

        test.contains(parsed, expected);
        test.done();
    },


    /*
     * Format Tests
     */

    testFormatSimpleNameShort_bs: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Derviš",
            familyName: "Sušić"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Derviš Sušić";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameMedium_bs: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Derviš",
            familyName: "Sušić"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Derviš Sušić";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameLong_bs: function(test) {
        test.expect(2);
        let name = new Name({
            givenName: "Derviš",

            familyName: "Sušić"  ,
            suffix: "viši"
        });
        let fmt = new NameFmt({
            style: "long",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Derviš Sušić";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatSimpleNameFull_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"  ,
            suffix: "viši"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Gospodin Derviš Sušić viši";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameShort_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Derviš Sušić";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameMedium_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Derviš Sušić";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatComplexNameLong_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "Gospodin",
            givenName: "Derviš",
            familyName: "Sušić"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "Gospodin Derviš Sušić";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatAsianNameShort_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        let fmt = new NameFmt({
            style: "short",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatAsianNameMedium_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        let fmt = new NameFmt({
            style: "medium",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "地獸";

        test.equal(formatted, expected);
        test.done();
    },

    testFormatAsianNameLong_bs: function(test) {
        test.expect(2);
        let name = new Name({
            prefix: "小",
            givenName: "獸",
            familyName: "地"
        });
        let fmt = new NameFmt({
            style: "full",
            locale: 'bs-BA'
        });
        let formatted = fmt.format(name);
        test.ok(typeof(formatted) !== "undefined");

        const expected = "小地獸";

        test.equal(formatted, expected);
        test.done();
    }






};

'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { Knob } from 'primereact/knob';
import { Badge } from 'primereact/badge';

import { getd14, getd15, getd16 } from '../../../api/kcvl';

const MRRatio = () => {
    const [selectedMachCode, setSelectedMachCode] = useState('KCVL-TW-A'); // Initial value, you can change it as needed
    const [data, setData] = useState(null);
    const [fetchNow, setFetchNow] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedDropDown, setselectedDropDown] = useState(null);

    const DropDownList = [
        { name: 'KCVL-TW-A', code: 'D14A' },
        { name: 'KCVL-TW-B', code: 'D14B' },
        { name: 'KCVL-TW-C', code: 'D14C' },
        { name: 'KCVL-TW-D', code: 'D14D' },
        { name: 'KCVL-TW-E', code: 'D15E' },
        { name: 'KCVL-TW-F', code: 'D15F' },
        { name: 'KCVL-TW-G', code: 'D15G' },
        { name: 'KCVL-TW-H', code: 'D15H' },
        { name: 'KCVL-FD-A', code: 'D16A' },
        { name: 'KCVL-FD-B', code: 'D16B' },
        { name: 'KCVL-FD-C', code: 'D16C' },
        { name: 'KCVL-FD-D', code: 'D16D' }
    ];

    const formattedDate = fetchNow
        ? fetchNow.toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
          })
        : '';

    const handleDropdownChange = (code) => {
        // console.log('handleDropDownChange', code)
        setselectedDropDown(code);
        fetchAndSetData(code);
        // selectedMachCode(code.name);
    };

    const fetchAndSetData = async (code) => {
        // setselectedDropDown(code);
        let fetchDataFunction;
        let fetchCode;
        try {
            setFetchNow(new Date());
            setLoading(true); // Set loading to true when starting to fetch data

            fetchCode = code.code;
            // console.log('fetchCode', fetchCode);
            switch (code.name) {
                case 'KCVL-TW-A':
                case 'KCVL-TW-B':
                case 'KCVL-TW-C':
                case 'KCVL-TW-D':
                    fetchDataFunction = getd14;
                    break;
                case 'KCVL-TW-E':
                case 'KCVL-TW-F':
                case 'KCVL-TW-G':
                case 'KCVL-TW-H':
                    fetchDataFunction = getd15;
                    break;
                case 'KCVL-FD-A':
                case 'KCVL-FD-B':
                case 'KCVL-FD-C':
                case 'KCVL-FD-D':
                    fetchDataFunction = getd16;
                    break;
                default:
                    console.error(`Invalid MACHCODE: ${code.name}`);
                    return;
            }

            const result = await fetchDataFunction(fetchCode);
            // console.log('result', result);
            setData(result);

            //based on selected
            // switch (code) {
            //     case "KCVL-TW-A":
            //         code = 'D14A'

            //     default:
            //         console.error(`Invalid MACHCODE: ${code}`);
            //         return;
            // }
        } catch (error) {
        } finally {
            setLoading(false); // Set loading to false when data fetching is complete
            // setselectedDropDown(code);
        }
    };

    const DisplayData = ({ data }) => {
        // console.log('DisplayData', data);
        if (!data) {
            return <p>No data found</p>;
        }

        return (
            <div className="grid">
                {data.map((item, index) => {
                    const sigtime = new Date(item.SIGTIME);
                    const currentDateTime = new Date();

                    // Calculate the time difference in milliseconds
                    const timeDifference = currentDateTime - sigtime;
                    // Calculate the difference in hours
                    const hoursDifference = timeDifference / (1000 * 60 * 60);
                    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

                    const formattedHoursDifference = Math.abs(hoursDifference).toFixed(2);
                    const formatteddaysDifference = Math.abs(daysDifference).toFixed(2);

                    let _StartTime = 0;
                    let _StopTime = 0;
                    let _BGStyle = 'var(--red-50)';
                    let _BGKnob = 'var(--red-500)';
                    let _BGKnobValue = 'var(--red-500)';
                    let subTitleHeader = '';
                    let _BGBadge = 'secondary';
                    let _IcBadge = 'pi pi-stop-circle';

                    // stop time
                    if (item.D05000 === '0') {
                        _BGStyle = 'var(--red-50)';
                        _BGKnob = 'var(--red-200)';
                        _BGKnobValue = 'var(--red-500)';
                        _BGBadge = 'secondary';
                        _IcBadge = 'pi pi-stop-circle';
                    } else {
                        _BGStyle = 'var(--green-50)';
                        _BGKnob = 'var(--green-200)';
                        _BGKnobValue = 'var(--green-500)';
                        _BGBadge = 'primary';
                        _IcBadge = 'pi pi-spin pi-cog';
                    }

                    if (hoursDifference < 24) {
                        // console.log('h<24', item.DURATION);
                        if (item.D05000 === '0') {
                            _StopTime = item.DURATION ? item.DURATION : formattedTime;
                            _StartTime = 0;
                            subTitleHeader = 'Stop Time: ' + _StopTime;
                        } else {
                            _StopTime = 0;
                            _StartTime = item.DURATION ? item.DURATION : formattedTime;
                            subTitleHeader = 'Run Time: ' + _StartTime;
                        }
                    } else {
                        // console.log('h>24', item.DURATION);
                        if (item.D05000 === '0') {
                            _StopTime = (hoursDifference / 24).toFixed(2);
                            _StartTime = 0;
                            subTitleHeader = 'Stop Time: ' + _StopTime + ' day/s';
                        } else {
                            _StopTime = (hoursDifference / 24).toFixed(2);
                            _StartTime = 0;
                            subTitleHeader = 'Stop Time: ' + _StopTime + ' day/s';
                        }
                    }

                    return (
                        <div key={item.uniqueIdentifier} className="card col-4 md:col-3 xl:col-2 justify-content-center" style={{ backgroundColor: _BGStyle, borderRadius: 'var(--border-radius)', padding: '1.0rem', margin: '0' }}>
                            <div className="text-center">
                                {/* <i className="pi pi-spin pi-circle" style={{ fontSize: '2rem' }}></i> */}
                                <Button size="large" label={item.MACHNAME} icon={_IcBadge} iconPos="right" severity="info" raised disabled />
                                {/* <Badge value={item.MACHNAME} size="xlarge" severity="success"></Badge> */}
                                <Knob readOnly id={item.MACHCODE} value={item.MC_RATIO} valueTemplate={`${item.MC_RATIO}%`} size={'90%'} valueColor={_BGKnobValue} rangeColor={_BGKnob} />
                                <Badge className="justify-content-center" value={subTitleHeader} severity={_BGBadge}></Badge>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    useEffect(() => {
        // Fetch initial data
        let _dataLoad = { name: '', code: '' };
        // let _dataLoad = { name: 'KCVL-TW-A', code: 'D14A' }
        // // setselectedDropDown(_dataLoad)

        // console.log('load', _dataLoad);
        fetchAndSetData(_dataLoad);

        // Set up interval to fetch data every 1 minute
        const intervalId = setInterval(() => {
            fetchAndSetData(selectedDropDown);
        }, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [selectedDropDown]); // Trigger the effect when selectedMachCode changes

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>
                        Machine Running Status (Ratio) KCVL {'          '}
                        <Dropdown value={selectedDropDown} onChange={(e) => handleDropdownChange(e.value)} options={DropDownList} optionLabel="name" placeholder="Machine .." />
                    </h5>
                    {loading ? (
                        <div className="grid">
                            {/* <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>{' '} */}
                            <Button loading={loading} label="Loading Data ..." className="" text outlined size="small" severity="secondary" icon="pi pi-refresh pi-spin" />
                        </div>
                    ) : (
                        <div className="grid">
                            <div className="col-6 ">
                                <Button title="Update" loading={loading} label={formattedDate} className="" text outlined size="small" severity="info" icon="pi pi-refresh" onClick={() => fetchAndSetData(selectedDropDown)} />
                            </div>
                            <div className="col-6"></div>

                            <div className="col-12">
                                <DisplayData data={data} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MRRatio;

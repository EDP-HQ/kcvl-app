'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Chip } from 'primereact/chip';
import { Row } from 'primereact/row';
import { Card } from 'primereact/card';
import { Knob } from 'primereact/knob';
import { Badge } from 'primereact/badge';

import { getd14, getd15, getd16 } from '../../../api/kcvl';
import { getratio } from '../../../api/avg';

const MRAvgRatioKSB = () => {
    // const [selectedMachCode, setSelectedMachCode] = useState('KCVL-TW-A'); // Initial value, you can change it as needed
    const [data, setData] = useState(null);
    const [fetchNow, setFetchNow] = useState();
    const [loading, setLoading] = useState(true);
    const [selectedDropDown, setselectedDropDown] = useState(null);
    const [selectedRatio, setSelectedRatio] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    const DropDownList = [
        { name: 'SWF', code: 'D01' },
        { name: 'INLINE', code: 'D02' },
        { name: 'WR 1', code: 'D03' },
        { name: 'WR 2', code: 'D04' },
        { name: 'WR 3', code: 'D05' },
        { name: 'PC', code: 'D06' },
        { name: 'SPRINGWIRE', code: 'D07' },
        { name: 'BW-A', code: 'D08' },
        { name: 'BW-A1', code: 'D09' },
        { name: 'SC-B', code: 'D10' },
        { name: 'SC-E', code: 'D11' },
        { name: 'BW-G', code: 'D12' },
        { name: 'KNSB', code: 'D13' },
        { name: 'KCVL-TW', code: 'D14' },
        { name: 'KCVL-TW', code: 'D15' },
        { name: 'KCVL-FD', code: 'D16' }
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
        // console.log('fetchAndSetData', code);
        let fetchDataFunction;
        let fetchCode;
        try {
            setFetchNow(new Date());
            setLoading(true); // Set loading to true when starting to fetch data

            fetchCode = code.code;
            // fetchDataFunction = getksb;
            switch (code.name) {
                case 'SWF':
                case 'INLINE':
                case 'WR 1':
                case 'WR 2':
                case 'WR 3':
                case 'PC':
                case 'SPRINGWIRE':
                case 'BW-A':
                case 'BW-A1':
                case 'SC-B':
                case 'SC-E':
                case 'BW-G':
                case 'KNSB':
                case 'KCVL-TW':
                case 'KCVL-FD':
                    fetchDataFunction = getratio;
                    break;
                default:
                    console.error(`Invalid MACHCODE: ${code.name}`);
                    return;
            }

            const result = await fetchDataFunction(fetchCode);
            // console.log('result', result);
            setData(result);
        } catch (error) {
        } finally {
            setLoading(false); // Set loading to false when data fetching is complete
        }
    };

    const DisplayData = ({ data }) => {
        // console.log('DisplayData', data);
        if (!data) {
            return <p></p>;
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

                    const hours = Math.floor(formattedHoursDifference);
                    const minutes = Math.floor((formattedHoursDifference - hours) * 60);
                    const seconds = Math.floor(((formattedHoursDifference - hours) * 60 - minutes) * 60);
                    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} hour${hours !== 1 ? 's' : ''}`;
                    // console.log('formattedHoursDifference', formattedHoursDifference);

                    let _StartTime = 0;
                    let _StopTime = 0;
                    let _BGStyle = 'var(--bluegray-50)';
                    let _BGKnob = 'var(--red-500)';
                    let _BGKnobValue = 'var(--red-500)';
                    let subTitleHeader = '';
                    let _BGBadge = 'secondary';
                    let _IcBadge = 'pi pi-stop-circle';

                    let _BGDay = 'var(--red-500)';
                    let _BGWeek = 'var(--red-500)';
                    let _BGMonth = 'var(--red-500)';
                    let _stringHeader = '';

                    const ratioData = [
                        {
                            machcode: item.MACHCODE,
                            machname: item.MACHNAME,
                            mcstatus: item.MCSTATUS,
                            duration: item.DURATION,
                            realtime: item.REALTIMERATIO,
                            day: item.DAILYRATIO,
                            week: item.WEEKLYRATIO,
                            month: item.MONTHLYRATIO
                        }
                    ];

                    const _MCSTATUS = item.MCSTATUS;

                    if (_MCSTATUS === '0' || _MCSTATUS === 0) {
                        _BGStyle = 'var(--red-50)';
                        _IcBadge = 'pi pi-stop-circle';
                        _BGBadge = 'secondary';
                        _BGKnob = 'var(--bluegray-400)';
                    } else {
                        _BGStyle = 'var(--green-50)';
                        _IcBadge = 'pi pi-spin pi-cog';
                        _BGBadge = 'success';
                        _BGKnob = 'var(--blue-400)';
                    }

                    const _DAILYRATIO = item.DAILYRATIO;
                    const _WEEKLYRATIO = item.WEEKLYRATIO;
                    const _MONTHLYRATIO = item.MONTHLYRATIO;

                    if (_DAILYRATIO <= 40) {
                        _BGDay = 'var(--red-200)';
                    } else if (_DAILYRATIO > 40 && _DAILYRATIO <= 60) {
                        _BGDay = 'var(--yellow-200)';
                    } else {
                        _BGDay = 'var(--green-200)';
                    }
                    if (_WEEKLYRATIO <= 40) {
                        _BGWeek = 'var(--red-200)';
                    } else if (_WEEKLYRATIO > 40 && _WEEKLYRATIO <= 60) {
                        _BGWeek = 'var(--yellow-200)';
                    } else {
                        _BGWeek = 'var(--green-200)';
                    }
                    if (_MONTHLYRATIO <= 40) {
                        _BGMonth = 'var(--red-200)';
                    } else if (_MONTHLYRATIO > 40 && _MONTHLYRATIO <= 60) {
                        _BGMonth = 'var(--yellow-200)';
                    } else {
                        _BGMonth = 'var(--green-200)';
                    }

                    const _DURATION = item.DURATION;
                    if (_MCSTATUS === '0' || _MCSTATUS === 0) {
                        _stringHeader = 'STOP TIME: ' + _DURATION;
                    } else {
                        _stringHeader = 'START TIME: ' + _DURATION;
                    }

                    const headertableDT = (item) => {
                        const _machname = item[0].machname;
                        return (
                            <div className="text-center justify-content-center" style={{ fontSize: '2.1rem' }}>
                                {_machname}
                            </div>
                        );
                    };

                    const footertableDT = (item) => {
                        // console.log('header', header);
                        // console.log('header', header[0].machname);
                        let _footer = '';
                        const _mcstatus = item[0].mcstatus;
                        const _duration = item[0].duration;

                        if (_mcstatus === '0' || _mcstatus === 0) {
                            _footer = 'STOP TIME : ';
                        } else {
                            _footer = 'START TIME : ';
                        }
                        return (
                            <div className="text-center" style={{ fontWeight: '600', color: 'var(--text-color)' }}>
                                <small>{_footer}</small> {_duration}
                            </div>
                        );
                    };

                    const col_MCSTATUS = (rowData) => {
                        let _mcstatus = rowData.mcstatus;

                        if (_mcstatus === '1') {
                            return (
                                <div className="text-center">
                                    <i title={'RUN'} className="pi pi-spin pi-cog" style={{ fontSize: '2.0rem', color: 'var(--primary-color-text)' }}></i>
                                </div>
                            );
                        } else {
                            return (
                                <div className="text-center">
                                    <i title={'STOP'} className="pi pi-stop-circle" style={{ fontSize: '2.0rem', color: 'var(--primary-color-text)' }}></i>
                                </div>
                            );
                        }
                    };

                    const CustomColumn = ({ value, title }) => {
                        let fontWeight;
                        if (value <= 40) {
                            fontWeight = '600';
                        } else if (value > 40 && value <= 60) {
                            fontWeight = '550';
                        } else {
                            fontWeight = '500';
                        }

                        return (
                            <div title={title} className="text-center" style={{ fontSize: '2.0rem', fontWeight, color: 'var(--text-color)' }}>
                                {value} %
                            </div>
                        );
                    };
                    const col_DAY = (rowData) => {
                        return <CustomColumn value={rowData.day} title="DAY" />;
                    };

                    const col_WEEK = (rowData) => {
                        return <CustomColumn value={rowData.week} title="WEEK" />;
                    };

                    const col_MONTH = (rowData) => {
                        return <CustomColumn value={rowData.month} title="MONTH" />;
                    };

                    return (
                        <div key={item.uniqueIdentifier} className="col-6 md:col-4 xl:col-3 justify-content-center" style={{ padding: '0.5rem', margin: '0' }}>
                            <DataTable value={ratioData} footer={footertableDT(ratioData)} header={headertableDT(ratioData)} stripedRows showGridlines color="" tableStyle={{ width: '100%' }}>
                                <Column body={col_MCSTATUS} field="mcstatus" header="RUN/STOP" bodyStyle={{ width: '25%', backgroundColor: _BGKnob }}></Column>
                                <Column body={col_DAY} field="day" header="YESTERDAY" bodyStyle={{ width: '25%', backgroundColor: _BGDay }}></Column>
                                <Column body={col_WEEK} field="week" header="WEEK" bodyStyle={{ width: '25%', backgroundColor: _BGWeek }}></Column>
                                <Column body={col_MONTH} field="month" header="MONTH" bodyStyle={{ width: '25%', height: '80px', backgroundColor: _BGMonth }}></Column>
                            </DataTable>
                            <br />
                            {ratioData.mcstatus}
                        </div>

                        // <div key={item.uniqueIdentifier} className="card col-6 md:col-4 xl:col-3 justify-content-center" style={{ backgroundColor: _BGStyle, borderRadius: 'var(--border-radius)', padding: '0.5rem', margin: '0' }}>
                        //     <div className="text-center">
                        //         <Button size="large" label={item.MACHNAME} icon={_IcBadge} iconPos="right" severity={_BGBadge} raised disabled />

                        //         <DataTable value={ratioDT} tableStyle={{ minWidth: '50rem' }}>
                        //             <Column field="mcstatus" header="Code"></Column>
                        //         <
                        //     </div>
                        // </div>
                    );
                })}
            </div>
        );
    };

    const DisplayLegend = ({ data }) => {
        // console.log('DisplayLegend', item);
        // Check if data is null or undefined
        if (!data) {
            return <div></div>;
        }

        const dataItem = data;

        let _BG = '';
        let _BGWorse = 'var(--red-200)';
        let _BGNormal = 'var(--yellow-200)';
        let _BGGood = 'var(--green-200)';
        let _BGRun = 'var(--blue-200)';
        let _BGStop = 'var(--bluegray-200)';

        let _totalworse_d = 0;
        let _totalworse_w = 0;
        let _totalworse_m = 0;
        let _totalnormal_d = 0;
        let _totalnormal_w = 0;
        let _totalnormal_m = 0;
        let _totalgood_d = 0;
        let _totalgood_w = 0;
        let _totalgood_m = 0;

        data.map((item, index) => {
            // console.log('MCSTATUS', item.MCSTATUS);
            const _DAILYRATIO = item.DAILYRATIO;
            const _WEEKLYRATIO = item.WEEKLYRATIO;
            const _MONTHLYRATIO = item.MONTHLYRATIO;

            if (_DAILYRATIO <= 40) {
                _totalworse_d = _totalworse_d + 1;
            } else if (_DAILYRATIO > 40 && _DAILYRATIO <= 60) {
                _totalnormal_d = _totalnormal_d + 1;
            } else if (_DAILYRATIO > 60 && _DAILYRATIO <= 100) {
                _totalgood_d = _totalgood_d + 1;
            }

            if (_WEEKLYRATIO <= 40) {
                _totalworse_w = _totalworse_w + 1;
            } else if (_WEEKLYRATIO > 40 && _WEEKLYRATIO <= 60) {
                _totalnormal_w = _totalnormal_w + 1;
            } else if (_WEEKLYRATIO > 60 && _WEEKLYRATIO <= 100) {
                _totalgood_w = _totalgood_w + 1;
            }

            if (_MONTHLYRATIO <= 40) {
                _totalworse_m = _totalworse_m + 1;
            } else if (_MONTHLYRATIO > 40 && _MONTHLYRATIO <= 60) {
                _totalnormal_m = _totalnormal_m + 1;
            } else if (_MONTHLYRATIO > 60 && _MONTHLYRATIO <= 100) {
                _totalgood_m = _totalgood_m + 1;
            }
        });

        let worseAll = {
            d: _totalworse_d,
            w: _totalworse_w,
            m: _totalworse_m
        };
        let normalAll = {
            d: _totalnormal_d,
            w: _totalnormal_w,
            m: _totalnormal_m
        };
        let goodAll = {
            d: _totalgood_d,
            w: _totalgood_w,
            m: _totalgood_m
        };

        const legendDT = [
            {
                run: '1',
                stop: '1',
                worse: worseAll,
                normal: normalAll,
                good: goodAll,
                typeDT: '1'
            }
        ];

        const colWorse = (rowData) => {
            // console.log('colWorse', rowData);

            let _worseD = rowData.worse.d ? rowData.worse.d : '0';
            let _worseW = rowData.worse.w ? rowData.worse.w : '0';
            let _worseM = rowData.worse.m ? rowData.worse.m : '0';
            // console.log('_worse', _worseD);

            return (
                <div className="text-center">
                    <Button severity="danger" label="Yesterday"  outlined badge={_worseD +'%'} badgeClassName="p-badge-danger" />
                    <Button severity="danger" label="Week" text outlined badge={_worseW} badgeClassName="p-badge-danger" />
                    <Button severity="danger" label="Month" text outlined badge={_worseM} badgeClassName="p-badge-danger" />
                </div>
            );
        };
        const colNormal = (rowData) => {
            // console.log('colWorse', rowData);

            let _normalD = rowData.normal.d ? rowData.normal.d : '0';
            let _normalW = rowData.normal.w ? rowData.normal.w : '0';
            let _normalM = rowData.normal.m ? rowData.normal.m : '0';
            // console.log('_worse', _worseD);

            return (
                <div className="text-center">
                    <Button severity="warning" label="Yesterday"  outlined badge={_normalD} badgeClassName="p-badge-warning" />
                    <Button severity="warning" label="Week" text outlined badge={_normalW} badgeClassName="p-badge-warning" />
                    <Button severity="warning" label="Month" text outlined badge={_normalM} badgeClassName="p-badge-warning" />
                </div>
            );
        };
        const colGood = (rowData) => {
            // console.log('colWorse', rowData);

            let _goodD = rowData.good.d ? rowData.good.d : '0';
            let _goodW = rowData.good.w ? rowData.good.w : '0';
            let _goodM = rowData.good.m ? rowData.good.m : '0';
            // console.log('_worse', _worseD);

            return (
                <div className="text-center">
                    <Button severity="success" label="Yesterday"  outlined badge={_goodD} badgeClassName="p-badge-success" />
                    <Button severity="success" label="Week" text outlined badge={_goodW} badgeClassName="p-badge-success" />
                    <Button severity="success" label="Month" text outlined badge={_goodM} badgeClassName="p-badge-success" />
                </div>
            );
        };

        return (
            <div className="text-center justify-content-center ">
                <DataTable value={legendDT} size="small">
                    {/* <Column field="typeDT" header="#" style={{ width: '25%', backgroundColor: _BG }}></Column> */}
                    <Column body={colWorse} field="worse.d" header="Worse(1-40)" headerStyle={{ backgroundColor: _BGWorse }}></Column>
                    <Column body={colNormal} ield="normal.d" header="Normal(41-60)" headerStyle={{ backgroundColor: _BGNormal }}></Column>
                    <Column body={colGood} field="good.d" header="Good (61-100)" headerStyle={{ backgroundColor: _BGGood }}></Column>
                </DataTable>
            </div>
        );
    };

    const DisplayRunStop = ({ data }) => {
        // console.log('DisplayRunStop', data);
        if (!data) {
            return <div></div>;
        }

        let _BG = '';
        let _BGWorse = 'var(--red-200)';
        let _BGNormal = 'var(--yellow-200)';
        let _BGGood = 'var(--green-200)';
        let _BGRun = 'var(--blue-200)';
        let _BGStop = 'var(--bluegray-200)';

        let _totalRun = 0;
        let _totalStop = 0;
        data.map((item, index) => {
            // console.log('MCSTATUS', item.MCSTATUS);
            if (item.MCSTATUS === '0' || item.MCSTATUS === 0) {
                _totalStop = _totalStop + 1;
            } else {
                _totalRun = _totalRun + 1;
            }
        });

        // console.log('_totalStop', _totalStop);
        // console.log('_totalRun', _totalRun);

        const legendDT = [
            {
                run: _totalRun ? _totalRun : '0',
                stop: _totalStop ? _totalStop : '0',
                worse: '0',
                normal: '0',
                good: '0',
                typeDT: '0'
            }
        ];

        const colRun = (rowData) => {
            let _run = rowData.run;
            return (
                <div className="text-center">
                    <Button severity="info" label="Run" icon="pi pi-spin pi-cog" text outlined badge={_run} badgeClassName="p-badge-info" />
                </div>
            );
        };

        const colStop = (rowData) => {
            let _stop = rowData.stop;
            return (
                <div className="text-center">
                    <Button severity="secondary" label="Stop" icon="pi pi-stop-circle" text outlined badge={_stop} badgeClassName="p-badge-secondary" />
                </div>
            );
        };

        return (
            <div className="text-center justify-content-center ">
                <DataTable value={legendDT} size="small">
                    <Column body={colRun} field="run" header="Run" headerStyle={{ width: '50%', backgroundColor: _BGRun }}></Column>
                    <Column body={colStop} field="stop" header="Stop" headerStyle={{ width: '50%', backgroundColor: _BGStop }}></Column>
                </DataTable>
            </div>
        );
    };

    useEffect(() => {
        // Fetch initial data
        let _dataLoad = { name: '', code: '' };
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
                        Machine Running Status (Average Ratio) : {'          '}
                        <Dropdown value={selectedDropDown} onChange={(e) => handleDropdownChange(e.value)} options={DropDownList} optionLabel="name" placeholder="Machine .." />
                    </h5>
                    {loading ? (
                        <Button loading={loading} label="Loading Data ..." className="" text outlined size="small" severity="secondary" icon="pi pi-refresh pi-spin" />
                    ) : (
                        <div className="grid">
                            <div className="col-12 md:col-12 xl:col-12">
                                <Button title="Update" loading={loading} label={formattedDate} className="" text outlined size="small" severity="info" icon="pi pi-refresh" onClick={() => fetchAndSetData(selectedDropDown)} />
                            </div>
                            <div className="col-12 md:col-6 xl:col-4">
                                <DisplayRunStop data={data} />
                            </div>
                            <div className="col-12 md:col-6 xl:col-8">
                                <DisplayLegend data={data} />
                            </div>
                            <div className="col-12 md:col-12 xl:col-12">
                                <DisplayData data={data} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MRAvgRatioKSB;
